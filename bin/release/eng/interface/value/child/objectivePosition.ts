import { ValueNumberType } from '../../../type'

/**
 * The position in the world of the specified
 * objective (either a control point, a payload
 * checkpoint, or a payload destination) Valid
 * in Assault, Assault/Escort (Hybrid), Escort, and Control.
 */
export interface IObjectivePosition {
    /**
     * Number - The index of the objective to consider,
     * starting at 0 and counting up. Each control
     * point, payload checkpoint, and payload destination
     * as its own index. Can use most Number based
     * Value Syntax to provide this value, but
     * must output in a integer of 0, 1, or 2.
     */
    number: ValueNumberType
}