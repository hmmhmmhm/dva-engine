import { ValueNumberType } from '../../../type'

/**
 * The cosine of a specified angle in radians.
 * The cosine of the angle is equal to the
 * length of the adjacent side divided by the
 * length of the hypotenuse. A radian is a
 * unit of angle, equal to an angle at the
 * center of a circle whose arc is equal in
 * length to the radius.
 */
export interface ICosineFromRadians {
    /**
     * Angle - Angle in radians. Can use most Player
     * based Value Syntax to provide this value.
     */
    angle: ValueNumberType
}