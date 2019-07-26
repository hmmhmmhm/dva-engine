import {
    ValueVectorType,
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * {494}
 */
export interface IRayCastHitNormal {
    /**
     * {659}
     */
    startPos: ValueVectorType

    /**
     * {660}
     */
    endPos: ValueVectorType

    /**
     * {661}
     */
    playersToInclude: ValueArrayType

    /**
     * {662}
     */
    playersToExclude: ValueArrayType

    /**
     * {663}
     */
    IncludePlayerOwnedObjects: ValueBoolType
}