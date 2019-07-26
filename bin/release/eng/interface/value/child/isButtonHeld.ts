import {
    ValuePlayerType,
    ValueButtonType
} from '../../../type'

/**
 * Whether a player is holding a specific button.
 */
export interface IIsButtonHeld {
    /**
     * Player - The player whose button to check.
     * Can use most player based Value Syntax to
     * retrieve this value.
     */
    player: ValuePlayerType
    /**
     * Button - The button to check. Designed by
     * any action inputs by ability but not directional
     * inputs. (i.e. Primary Fire, Secondary Fire,
     * Ultimate Ability, Jump, Crouch, etc.)
     */
    button: ValueButtonType
}