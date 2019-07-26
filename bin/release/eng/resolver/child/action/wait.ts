/**
 * Pauses the execution of the action list,
 * unless the wait is interrupted. The remainder
 * of the actions will execute after the pause.
 */
export const wait = (
	/**
	 * Time - The duration of the pause. A minimum
	 * value of 0.250 seconds is required. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	time: string | number | any[],
	/**
	 * Wait Behavior - Specifies if and how the
	 * wait can be interrupted. If the condition
	 * list is ignored, the wait will not be interrupted,
	 * otherwise, the condition list will determine
	 * if and when the action list will abort or restart.
	 * - `Type.WaitBehavior.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	waitBehavior: string | number | any[]
) => {

	return `Wait(${time}, ${waitBehavior})`
}