/**
 * Undoes the effect of the enable death spectate
 * all players action for one or more players.
 */
export const disableDeathSpectateAllPlayers = (
	/**
	 * Player - The player or players whose default
	 * death spectate behavior is restored. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Disable Death Spectate All Players(${player})`
}