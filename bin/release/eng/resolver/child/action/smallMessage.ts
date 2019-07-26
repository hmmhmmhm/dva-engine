/**
 * Displays a small message beneath the reticle
 * that is visible to specific players.
 */
export const smallMessage = (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * Header - The message to be displayed. Can
	 * use most String based Value Syntax to specify.
	 * - `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string | number | any[]
) => {

	return `Small Message(${visibleTo}, ${header})`
}