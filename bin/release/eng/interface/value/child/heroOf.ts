import {
    ValuePlayerType
} from '../../../type'

/**
 * The Current Hero of a Player.
 */
export interface IHeroOf {
    /**
     * Player - The player whose hero to acquire.
     * Can use most player based Value Syntax to
     * retrieve this value.
     */
    player: ValuePlayerType
}