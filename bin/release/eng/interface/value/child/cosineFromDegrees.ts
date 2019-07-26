import { ValueNumberType } from '../../../type'

/**
 * The cosine of a specified angle in degrees.
 * The cosine of the angle is equal to the
 * length of the adjacent side divided by the
 * length of the hypotenuse.
 */
export interface ICosineFromDegrees {
    /**
     * Angle - Angle in degrees. Can use most Player
     * based Value Syntax to provide this value.
     */
    angle: ValueNumberType
}