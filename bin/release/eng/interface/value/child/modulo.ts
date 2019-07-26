import { ValueNumberType } from '../../../type'

/**
 * The remainder of the left-hand operand divided
 * by the right-hand operand. Any number modulo
 * zero will result in zero. This will return
 * a numerical value of two number values compared.
 * For example 7 divided by 2 will result in
 * 1 for the Modulo.
 */
export interface IModulo {
    value1: ValueNumberType
    value2: ValueNumberType
}