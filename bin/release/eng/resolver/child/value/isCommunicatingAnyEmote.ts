/**
 * Whether a player is using a emote.
 */
export const isCommunicatingAnyEmote = (
	/**
	 * Player - The player whose emoting status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any Emote(${player})`
}