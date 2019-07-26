import { ValuePlayerType } from '../../../type/value/player'
import { VariableType } from '../../../type/variable'

/**
 * The current value of a player variable,
 * which is a variable that belongs to a specific player.
 */
export interface IPlayerVariable {
    player: ValuePlayerType
    variable: VariableType
}