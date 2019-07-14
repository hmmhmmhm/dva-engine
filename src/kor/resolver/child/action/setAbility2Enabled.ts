/**
 * 플레이어의 기술2 활성화 여부를 설정합니다.
 */
export const setAbility2Enabled = (
	/**
	 * 기술 2 사용 여부를 설정할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어가 기술 2을
	 * 사용할 수 있는지 여부를 지정합니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Bool.` 또는 `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	enabled: string
) => {

	return `Set Ability 2 Enabled(${player}, ${enabled})`
}