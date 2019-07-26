/**
 * Restarts the action list from the beginning
 * if this action’s condition evaluates to
 * true. If it does not, execution continues
 * with the next action. To prevent an infinite
 * loop, a wait action must execute between
 * the start of the action list and this action.
 */
export const loopIf = (
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Bool.`
	 */
	condition: string | number | any[]
) => {

	return `Loop If(${condition})`
}