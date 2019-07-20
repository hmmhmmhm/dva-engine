import {
    ValueVectorType,
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * {498}
 */
export interface IRayCastHitPosition {
    /**
     * {664}
     */
    startPos: ValueVectorType

    /**
     * {665}
     */
    endPos: ValueVectorType

    /**
     * {666}
     */
    playersToInclude: ValueArrayType

    /**
     * {667}
     */
    playersToExclude: ValueArrayType

    /**
     * {668}
     */
    IncludePlayerOwnedObjects: ValueBoolType
}