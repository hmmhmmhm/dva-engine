import { ValueNumberType } from '../../../type'

/**
 * A random real number between the specified min and max.
 */
export interface IRandomReal {
    /**
     * MIN - The smallest real number allowed.
     * Can use most Number based Value Syntax to
     * provide this value.
     */
    min: ValueNumberType
    /**
     * MAX - The largest real number allowed. Can
     * use most Number based Value Syntax to provide this value.
     */
    max: ValueNumberType
}