import { ValueNumberType } from '../../../type'

/**
 * The difference between two angles, after
 * the angles are wrapped within +/- 180 of
 * each other, the result is positive if the
 * second angle is greater than the first angle,
 * otherwise the result is zero or negative.
 */
export interface IAngleDifference {
    /**
     * Angle - You can specify any Angle Syntax
     * to define both of the required values.
     */
    angle1: ValueNumberType

    /**
     * Angle - One of the two angles between which
     * to measure the resulting angle.
     */
    angle2: ValueNumberType
}