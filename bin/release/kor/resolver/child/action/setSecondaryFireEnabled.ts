/**
 * 플레이어의 보조 발사
 * 활성화 여부를 설정합니다.
 */
export const setSecondaryFireEnabled = (
	/**
	 * 보조 발사 사용 여부를
	 * 설정할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 플레이어의 보조 발사 사용여부입니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	enabled: string | number | any[]
) => {

	return `Set Secondary Fire Enabled(${player}, ${enabled})`
}