import { ValuePlayerType } from '../../../type'

/**
 * The slot number of the specified player.
 * In team games, each team has slots 0 through
 * 5. In free-for-all games, slots are numbers 0 through 11.
 */
export interface ISlotOf {
    /**
     * Player - The player whose slot number to
     * acquire. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
}