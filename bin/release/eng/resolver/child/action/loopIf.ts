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
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string | number | any[]
) => {

	return `Loop If(${condition})`
}