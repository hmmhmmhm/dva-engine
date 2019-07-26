import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType,
    ValueRelativeType,
    ValueStartAcceleratingReevaluationType
} from '../../../type'

/**
 * Starts accelerating one or more players
 * in a specified location.
 */
export interface IStartAccelerating {
    /**
     * Player - The player or players that will
     * begin accelerating. Can use most Player
     * based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Direction - The unit direction in which
     * the acceleration will be applied. This value
     * is normalized internally. Can use most Vector
     * based Value Syntax to specify.
     */
    direction: ValueVectorType
    /**
     * Rate - The rate of acceleration in meters
     * per second squared. This value may need
     * to be quite high in order to overcome gravity
     * and/or surface friction. Can use most Number
     * based Value Syntax.
     */
    rate: ValueNumberType
    /**
     * Max Speed - The speed at which acceleration
     * will stop for the player or players. It
     * may not be possible to reach this speed
     * due to gravity and/or surface friction.
     * Can use most Number based Value Syntax.
     */
    maxSpeed: ValueNumberType
    /**
     * Relative - Specifies whether direction is
     * relavtive to the world coordinates or the
     * local coordinates of the player or players.
     */
    relative: ValueRelativeType
    /**
     * Player - The player or players who will
     * start turning. Can use most Player based Value Syntax.
     */
    reevaluation: ValueStartAcceleratingReevaluationType
}