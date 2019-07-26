/**
 * Whether a player is standing (defined as
 * both not moving and not in the air).
 */
export const isStanding = (
	/**
	 * Player - The player whose standing status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Standing(${player})`
}