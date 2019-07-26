import { ValueNumberType } from '../../../type'

/**
 * A vector composed of three real numbers
 * (X, Y, Z) where X is left, Y is Up, and
 * Z is forward. Vectors are used for position,
 * direction, and velocity.
 */
export interface IVector {

    /**
     * X - The X value of the Vector. Can use most
     * Number based Value Syntax to provide this value.
     */
    x: ValueNumberType

    /**
     * Y - The Y value of the vector. Can use most
     * Number based Value Syntax to provide this value.
     */
    y: ValueNumberType

    /**
     * Z - The Z value of the Vector. Can use most
     * Number based Value Syntax to provide this value.
     */
    z: ValueNumberType
}