import { ValuePlayerType } from '../../../type'

/**
 * Whether the specified player is using ability 1.
 */
export interface IIsUsingAbility1 {
    /**
     * Player - The player whose ability 1 usage
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}