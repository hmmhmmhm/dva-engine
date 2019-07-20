/**
 * 플레이어를 대상으로 한
 * START HOLDING BUTTON
 * 액션의 효과를 취소합니다.
 */
export const stopHoldingButton = (
	/**
	 * 더 이상 가상으로 버튼을
	 * 누르지 않을 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 더 이상 가상으로
	 * 눌리지 않을
	 * 논리적 버튼입니다.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Stop Holding Button(${player}, ${button})`
}