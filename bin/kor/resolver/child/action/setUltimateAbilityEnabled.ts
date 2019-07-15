/**
 * 플레이어의 궁극기
 * 활성화 여부를 설정합니다.
 */
export const setUltimateAbilityEnabled = (
	/**
	 * 궁극기 사용에 있어
	 * 영향을 받는 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어가 궁극기를
	 * 사용할 수 있는지 여부를 지정합니다.
	 * TRUE, FALSE 등의 부울 값
	 * 또는 COMPARE를 사용합니다.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	enabled: string
) => {

	return `Set Ultimate Ability Enabled(${player}, ${enabled})`
}