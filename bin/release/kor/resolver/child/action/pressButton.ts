/**
 * 플레이어에 대해
 * 한 프레임 동안
 * 가상으로 버튼 하나를
 * 누르도록 강제합니다.
 */
export const pressButton = (
	/**
	 * 가상 버튼 입력을
	 * 강제할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 누를 버튼입니다.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Press Button(${player}, ${button})`
}