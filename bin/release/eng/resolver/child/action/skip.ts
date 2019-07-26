/**
 * Skips execution of a certain number of actions
 * in the action list.
 */
export const skip = (
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	numberOfActions: string | number | any[]
) => {

	return `Skip(${numberOfActions})`
}