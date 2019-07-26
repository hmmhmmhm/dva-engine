/**
 * Whether a player is using a voice line.
 * (The duration of a voice line is assumed
 * to be 4 seconds.)
 */
export const isCommunicatingAnyVoiceLine = (
	/**
	 * Player - The player whose voice line status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any Voice Line(${player})`
}