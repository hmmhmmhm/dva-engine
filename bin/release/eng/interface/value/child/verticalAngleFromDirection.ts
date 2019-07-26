import { ValueVectorType } from '../../../type'

/**
 * The vertical angle in degrees corresponding
 * to the specified direction vector.
 */
export interface IVerticalAngleFromDirection {
    /**
     * Direction - The direction vector from which
     * to acquire a vertical angle in degrees.
     * The vector is unitized before calculations
     * begins. Can use most Vector based Value
     * Syntax to provide this value.
     */
    direction: ValueVectorType
}