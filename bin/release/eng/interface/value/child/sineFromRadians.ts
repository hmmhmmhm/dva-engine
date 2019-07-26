import { ValueNumberType } from '../../../type'

/**
 * Sine of the specified angle in radians.
 * The sine is the ratio of the length of the
 * side that is opposite  that angle to the
 * length of the longest side of the triangle
 * (the hypotenuse). A radian is a unit of
 * angle, equal to an angle at the center of
 * a circle whose arc is equal in length to the radius.
 */
export interface ISineFromRadians {
    /**
     * Angle - Angle in radians. Can use most Player
     * based Value Syntax to provide this value.
     */
    angle: ValueNumberType
}