/**
 * 플레이어의 기본 발사
 * 활성화 여부를 설정합니다.
 */
export const setPrimaryFireEnabled = (
	/**
	 * 기본 발사 사용 여부를
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 플레이어의 기본 발사 사용여부입니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.`
	 */
	enabled: string | number | any[]
) => {

	return `Set Primary Fire Enabled(${player}, ${enabled})`
}