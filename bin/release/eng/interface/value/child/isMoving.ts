import {
    ValuePlayerType,
} from '../../../type'

/**
 * Whether a specific player is moving (as
 * defined by having a non-zero constant speed).
 */
export interface IIsMoving {
    /**
     * Player - The player whose moving status
     * status to check. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
}