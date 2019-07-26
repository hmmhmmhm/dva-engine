import { ValuePlayerType, ValueBoolType } from '../../../type'

/**
 * Enables or disables ability 1 for one or more players.
 */
export interface ISetAbility1Enabled {
    /**
     * Player - The player or players whose access
     * to ability 1 is affected. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Enabled - Specifies whether the player or
     * players are able to use ability 1. Expects
     * a Boolean Value such as True, False, or
     * Compare. Can use most Boolean based Value Syntax.
     */
    enabled: ValueBoolType
}