/**
 * Undoes the effect of the disable built-in
 * game mode respawning for one or more players.
 */
export const enableBuiltInGameModeRespawning = (
	/**
	 * Player - The player or players whose respawning
	 * is affected. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.PlayersParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	players: string | number | any[]
) => {

	return `Enable Built In Game Mode Respawning(${players})`
}