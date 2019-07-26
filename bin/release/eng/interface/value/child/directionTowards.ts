import { ValueVectorType } from '../../../type'

/**
 * The unit-length direction vector from position to another.
 */
export interface IDirectionTowards {
    /**
     * Start Pos - The position from which the
     * resulting direction vector will point. Most
     * positional based Value Syntax can be used here.
     */
    startPos: ValueVectorType

    /**
     * End Pos - The position to which the resulting
     * direction vector will point. Most positional
     * based Value Syntax can be used here.
     */
    endPos: ValueVectorType
}