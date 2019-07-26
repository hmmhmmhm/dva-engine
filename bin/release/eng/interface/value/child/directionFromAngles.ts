import { ValueNumberType } from '../../../type'

/**
 * The unit-length direction vector corresponding
 * to the specified angles.
 */
export interface IDirectionFromAngles {
    /**
     * Horizontal Angle - The horizontal angle
     * in degrees used to construct the resulting
     * vector. Most angle based Value Syntax can be used here.
     */
    horizontalAngle: ValueNumberType

    /**
     * Vertical Angle - The vertical angle in degrees
     * used to construct the resulting vector.
     * Most angle based Value Syntax can be used here.
     */
    verticalAngle: ValueNumberType
}