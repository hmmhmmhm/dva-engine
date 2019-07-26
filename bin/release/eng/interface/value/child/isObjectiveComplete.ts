import { ValueNumberType } from '../../../type'

/**
 * Whether the specified objective has been
 * completed Results in false if the game mode
 * is not assault, escort, or assault/escort (hybrid).
 */
export interface IIsObjectiveComplete {
    /**
     * Number - The index of the objective to consider,
     * starting at 0 and counting up. Each control
     * point, payload checkpoint, and payload destination
     * has its own index. Can use most number based
     * Value Syntax to retrieve this value. Value
     * must be in the form of an integer (whole number).
     */
    number: ValueNumberType
}