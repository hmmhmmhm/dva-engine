import {
    ValueVectorType,
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * {496}
 */
export interface IRayCastHitPlayer {
    /**
     * {660}
     */
    startPos: ValueVectorType

    /**
     * {661}
     */
    endPos: ValueVectorType

    /**
     * {662}
     */
    playersToInclude: ValueArrayType

    /**
     * {663}
     */
    playersToExclude: ValueArrayType

    /**
     * {664}
     */
    IncludePlayerOwnedObjects: ValueBoolType
}