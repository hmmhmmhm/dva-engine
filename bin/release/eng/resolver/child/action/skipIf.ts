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
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string | number | any[],
	/**
	 * Condition - Specifies whether the loop will
	 * occur. Can use most Conditional based Value
	 * Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	numberOfActions: string | number | any[]
) => {

	return `Skip If(${condition}, ${numberOfActions})`
}