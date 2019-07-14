/**
 * 플레이어가 음성 대사를 사용하는지 여부입니다.
 * (음성 대사의 지속 시간은 4초로 추정)
 */
export const isCommunicatingVoiceLine = (
	/**
	 * 음성 대사 상태를 확인할 대상 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is Communicating Voice Line(${player})`
}