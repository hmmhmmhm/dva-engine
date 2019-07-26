import {
    ValueVectorType
} from '../../../type'

/**
 * The horizontal angle in degrees corresponding
 * to the specified direction vector.
 */
export interface IHorizontalAngleFromDirection {
    /**
     * Direction - The direction vector from which
     * to acquire a horizontal angle in degrees.
     * The vector is unitized before calculation
     * begins. Can use most Vector based Value
     * Syntax to retrieve this value.
     */
    direction: ValueVectorType
}