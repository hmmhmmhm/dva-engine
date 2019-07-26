import { ValueVectorType } from '../../../type'

/**
 * The position closest to the specified position
 * that can be stood on and is accessible from a spawn point.
 */
export interface INearestWalkablePosition {
    /**
     * Position - The position from which to search
     * for the nearest walkable position. Can use
     * any Vector based Value syntax to divide with.
     */
    position: ValueVectorType
}