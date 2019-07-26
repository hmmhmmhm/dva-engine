import { ValuePlayerType, ValueBoolType } from '../../../type'

/**
 * Enables or disables primary fire for one
 * or more players.
 */
export interface ISetPrimaryFireEnabled {
    /**
     * Player - The player or players whose access
     * to primary fire is affected. Can use most
     * Player based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Enabled - Specifies whether the player or
     * players are able to use primary fire. Expects
     * a Boolean Value such as True, False, or
     * Compare. Can use most Boolean based Value Syntax.
     */
    enabled: ValueBoolType
}