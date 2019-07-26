import { ValuePlayerType } from '../../../type'

/**
 * Whether the specified player is using an
 * ultimate ability.
 */
export interface IIsUsingUltimate {
    /**
     * Player - The player whose ultimate ability
     * usage to check. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
}