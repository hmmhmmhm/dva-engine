/**
 * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
 */
export const isButtonHeld = (
	/**
	 * 버튼을 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 확인할 버튼입니다.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Is Button Held(${player}, ${button})`
}