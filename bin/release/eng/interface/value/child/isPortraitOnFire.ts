import {
    ValuePlayerType,
} from '../../../type'

/**
 * Whether a specific player’s portrait is on fire.
 */
export interface IIsPortraitOnFire {
    /**
     * Player - The player whose portrait to check.
     * Can use most player based Value Syntax to
     * retrieve this value.
     */
    player: ValuePlayerType
}