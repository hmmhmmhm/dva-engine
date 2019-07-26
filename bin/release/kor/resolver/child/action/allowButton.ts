/**
 * 플레이어에 대해 DISALLOW BUTTON
 * 액션의 효과를 취소합니다.
 */
export const allowButton = (
	/**
	 * 버튼을 다시 사용할 수 있게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 다시 사용할 수 있게 될 논리적 버튼입니다.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Allow Button(${player}, ${button})`
}