import { ValueBoolType } from '../../../type'

/**
 * Whether the input is false (or the equivalent to false)
 */
export interface INot {
    /**
     * Value - When this input is false (or equivalent
     * to false), then the not value is true. Otherwise,
     * the not value is false. Can use most Boolean-based
     * Value Syntax to provide this value.
     */
    value: ValueBoolType
}