import {
    ValuePlayerType,
    VariableType,
    ValueDestinationParamType,
    ValueNumberType,
    ValueReevaluationType,
} from '../../../type'

/**
 * Gradually modifies the value of a player
 * variable at a specific rate. (A player variable
 * is a variable that belongs to a specific player.)
 */
export interface IChasePlayerVariableAtRate {
    /**
     * Player - The player whose variable will
     * gradually change. If multiple players are
     * provided, each of their variables will change independently.
     */
    player: ValuePlayerType
    /**
     * Rate - The amount of change that will happen
     * to the variable’s value each second. Can
     * use most Number based Value Syntax to specify.
     */
    variable: VariableType
    /**
     * Variable - The variable the action will
     * manipulate. Can use most Variable based Value Syntax.
     */
    destination: ValueDestinationParamType
    /**
     * Player - The player whose variable will
     * gradually change. If multiple players are
     * provided, each of their variables will change independently.
     */
    rate: ValueNumberType
    /**
     * Visible to - One or more players who will
     * be able to see the icon. Can use most Value
     * Syntax to select one or multiple players.
     */
    reevaluation: ValueReevaluationType
}