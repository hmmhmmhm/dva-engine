/**
 * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
 */
export const isButtonHeld = (
	/**
	 * 버튼을 확인할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 확인할 버튼입니다.
	 * - `Button.` 또는 `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string
) => {

	return `Is Button Held(${player}, ${button})`
}