import { ValueVectorType } from '../../../type'

/**
 * The distance between two positions in meters.
 */
export interface IDistanceBetween {
    /**
     * Start Pos - One of the two positions used
     * in the distance measurement. Most positional
     * based Value Syntax can be used here.
     */
    startPos: ValueVectorType

    /**
     * End Pos - One of the two positions used
     * in the distance measurement. Most positional
     * based Value Syntax can be used here.
     */
    endPos: ValueVectorType
}