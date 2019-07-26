/**
 * 플레이어가 지정된 의사소통 유형
 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
 */
export const isCommunicating = (
	/**
	 * 의사소통 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 고려할 의사소통 유형입니다.
	 * 
	 * 감정 표현의 지속 시간은 정확하게 적용되며,
	 * 음성 대사의 지속 시간은 4초로 간주합니다.
	 * 
	 * 그 이외의 지속 시간은 2초로 간주합니다.
	 * - `Type.Communication.`
	 */
	type: string | number | any[]
) => {

	return `Is Communicating(${player}, ${type})`
}