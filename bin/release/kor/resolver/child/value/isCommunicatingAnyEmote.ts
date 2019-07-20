/**
 * 플레이어가 감정 표현을 사용하는지 여부입니다.
 */
export const isCommunicatingAnyEmote = (
	/**
	 * 감정표현 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any Emote(${player})`
}