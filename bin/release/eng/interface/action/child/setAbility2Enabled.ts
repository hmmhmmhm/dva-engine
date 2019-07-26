import { ValuePlayerType, ValueBoolType } from '../../../type'

/**
 * Enables or disables ability 2 for one or more players.
 */
export interface ISetAbility2Enabled {
    /**
     * Player - The player or players whose access
     * to ability 2 is affected. Expects a Boolean
     * Value such as True, False, or Compare. Can
     * use most Player based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Enabled - Specifies whether the player or
     * players are able to use ability 2. Can use
     * most Boolean based Value Syntax.
     */
    enabled: ValueBoolType
}