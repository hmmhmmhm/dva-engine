import { ValueNumberType } from '../../../type'

/**
 * Sine of the specified angle in degrees.
 * The sine is the ratio of the length of the
 * side that is opposite  that angle to the
 * length of the longest side of the triangle
 * (the hypotenuse).
 */
export interface ISineFromDegrees {
    /**
     * Angle - Angle in degrees. Can use most Player
     * based Value Syntax to provide this value.
     */
    angle: ValueNumberType
}