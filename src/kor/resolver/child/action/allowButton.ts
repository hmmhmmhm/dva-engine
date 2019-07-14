/**
 * 플레이어에 대해 DISALLOW BUTTON
 * 액션의 효과를 취소합니다.
 */
export const allowButton = (
	/**
	 * 버튼을 다시 사용할 수 있게 될 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 다시 사용할 수 있게 될 논리적 버튼입니다.
	 * - `Button.` 또는 `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string
) => {

	return `Allow Button(${player}, ${button})`
}