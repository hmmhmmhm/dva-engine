/**
 * 플레이어가 논리적 버튼을
 * 사용 못 하게 하여 눌러도
 * 아무 효과 없도록 합니다.
 */
export const disallowButton = (
	/**
	 * 버튼을 사용 못 하게
	 * 할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 사용할 수 없게 된
	 * 논리적 버튼입니다.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Disallow Button(${player}, ${button})`
}