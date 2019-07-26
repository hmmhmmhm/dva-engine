/**
 * Skips execution of a certain number of actions
 * in the action list if this action’s condition
 * evaluates to true. If it does not, execution
 * continues with the next action.
 */
export const skipIf = (
	/**
	 * Number of actions - The number of action
	 * to skip, not including this action. Can
	 * use most Number based Value Syntax.
	 * - `Type.Bool.`
	 */
	condition: string | number | any[],
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	numberOfActions: string | number | any[]
) => {

	return `Skip If(${condition}, ${numberOfActions})`
}