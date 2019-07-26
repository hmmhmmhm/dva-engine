import { ValuePlayerType, ValueButtonType } from '../../../type'

/**
 * Disables a logical button for one or more
 * players such that pressing it has no effect.
 */
export interface IDisallowButton {
    /**
     * Player - The player executing this rule,
     * as specified by the event. May be the same
     * as the attacker or victim. Can use most
     * Player based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Button - The logical button that is being disabled.
     */
    button: ValueButtonType
}