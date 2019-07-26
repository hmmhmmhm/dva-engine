import {
    ValueVectorType
} from '../../../type'

/**
 * The displacement vector from one position to another.
 */
export interface IVectorTowards {
    /**
     * Start Pos - The start position for the line
     * of sight check. Most positional based Value
     * Syntax can be used here.
     */
    startPos: ValueVectorType
    /**
     * End Pos - The end position for the line
     * of sight check. Most positional based Value
     * Syntax can be used here.
     */
    endPos: ValueVectorType
}