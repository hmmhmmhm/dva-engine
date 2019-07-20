/**
 * STOP HOLDING BUTTON
 * 액션에 의해 중지되기 전까지
 * 가상으로 버튼하나를 누르도록
 * 플레이어에게 강제합니다.
 */
export const startHoldingButton = (
	/**
	 * 가상으로 버튼을
	 * 누르게 될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 가상으로 눌리게 되는
	 * 논리적 버튼입니다.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Start Holding Button(${player}, ${button})`
}