import { ValuePlayerType } from '../../../type'

/**
 * Whether the specified player is using ability 2.
 */
export interface IIsUsingAbility2 {
    /**
     * Player - The player whose ability 2 usage
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}