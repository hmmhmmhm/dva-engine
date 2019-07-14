/**
 * 플레이어가 아무 것이든 의사소통 유형
 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
 */
export const isCommunicatingAny = (
	/**
	 * 의사소통 상태를 확인할 대상 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is Communicating Any(${player})`
}