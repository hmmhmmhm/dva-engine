/**
 * Allows one or more players to spectate all
 * players when dead, as opposed to only allies.
 */
export const enableDeathSpectateAllPlayers = (
	/**
	 * Player - The player or players who will
	 * be allowed to spectate all players. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate All Players(${player})`
}