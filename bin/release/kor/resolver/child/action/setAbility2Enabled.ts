/**
 * 플레이어의 기술2 활성화 여부를 설정합니다.
 */
export const setAbility2Enabled = (
	/**
	 * 기술 2 사용 여부를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 플레이어가 기술 2을
	 * 사용할 수 있는지 여부를 지정합니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled: string | number | any[]
) => {

	return `Set Ability 2 Enabled(${player}, ${enabled})`
}