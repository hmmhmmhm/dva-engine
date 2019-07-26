import { ValuePlayerType, ValueBoolType } from '../../../type'

/**
 * Enables or disables the ultimate ability
 * of one or more players.
 */
export interface ISetUltimateAbilityEnabled {
    /**
     * Player - The player or players whose ultimate
     * charge will be set. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Enabled - Specifies whether the player or
     * players are able to use their ultimate ability.
     * Expects a Boolean Value such as True, False,
     * or Compare. Can use most Boolean based Value Syntax.
     */
    enabled: ValueBoolType
}