import { ValueNumberType } from '../../../type'

/**
 * The absolute value is a measure of how far
 * the number is from zero. If you think of
 * a number line, with zero in the center,
 * all you’re really doing is asking how far
 * away you are from this zero point. For example
 * the Absolute Value of 4 is 4 and the absolute
 * value of -6 is 6.
 */
export interface IAbsoluteValue {
    /**
     * Value - You can specify any Value Syntax
     * to define the Absolute Value.
     */
    value: ValueNumberType
}