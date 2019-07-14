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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 누를 버튼입니다.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string
) => {

	return `Press Button(${player}, ${button})`
}