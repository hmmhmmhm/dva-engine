/**
 * Stops execution of the action list if the
 * action’s condition evaluates to true, if
 * it does not, the execution continues with
 * the next action.
 */
export const abortIf = (
	/**
	 * Condition - Specifies whether the execution
	 * is stopped. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	condition: string | number | any[]
) => {

	return `Abort If(${condition})`
}