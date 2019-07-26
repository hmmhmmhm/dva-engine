import {
    ValuePlayerType,
} from '../../../type'

/**
 * Whether a player is on a wall (climbing or riding).
 */
export interface IIsOnWall {
    /**
     * Player - The player whose wall status to
     * check. Can use most player based Value Syntax
     * to retrieve this value.
     */
    player: ValuePlayerType
}