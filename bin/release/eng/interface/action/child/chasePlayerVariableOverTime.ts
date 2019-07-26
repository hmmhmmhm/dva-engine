import {
    ValuePlayerType,
    VariableType,
    ValueDestinationParamType,
    ValueNumberType,
    ValueReevaluationType,
} from '../../../type'

/**
 * Gradually modifies the value of a player
 * variable over time. (A player variable is
 * a variable that belongs to a specific player.)
 */
export interface IChasePlayerVariableOverTime {
    /**
     * Player - The player whose variable will
     * gradually change. If multiple players are
     * provided, each of their variables will change independently.
     */
    player: ValuePlayerType
    /**
     * Reevaluation - Specifies which of this action’s
     * inputs will be continuously reevaluated.
     * This action will keep asking for and using
     * new values from reevaluated inputs. You
     * can specify a Destination and Duration or nothing.
     */
    variable: VariableType
    /**
     * Variable - The variable the action will
     * manipulate. Can use most Variable based Value Syntax.
     */
    destination: ValueDestinationParamType
    /**
     * Destination - The value that the player
     * variable will eventually reach. The type
     * of this value may be either a number or
     * a vector, through the variable’s existing
     * value must be of the same type before the
     * chase begins. Can use most Number or Vector
     * based Value Syntax to specify.
     */
    duration: ValueNumberType
    /**
     * Visible to - One or more players who will
     * be able to see the icon. Can use most Value
     * Syntax to select one or multiple players.
     */
    reevaluation: ValueReevaluationType
}