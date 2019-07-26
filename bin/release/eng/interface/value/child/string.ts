import {
    ValueTextType,
    ValueStringParamType
} from '../../../type'

/**
 * Text formed from a selection of strings
 * and specified values.
 */
export interface IString {
    /**
     * String - How the string will be structured
     * using a series of text and phrases.
     */
    string: ValueTextType
    /**
     * {0} - The first value in the string.
     */
    _0: ValueStringParamType
    /**
     * {1} - The second value in the string.
     */
    _1: ValueStringParamType
    /**
     * {2} - The third value in the string.
     */
    _2: ValueStringParamType
}