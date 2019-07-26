import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType
} from '../../../type'

/**
 * Whether a location is within view of a player.
 */
export interface IIsInViewAngle {
    /**
     * Player - The player whose view to use for
     * the check. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
    /**
     * Location - The location to test if it’s
     * within view. Most positional based Value
     * Syntax can be used here.
     */
    location: ValueVectorType
    /**
     * Team - The team or teams on which to consider
     * players. Can use most Team based Value Syntax
     * to provide this value.
     */
    viewAngle: ValueNumberType
}