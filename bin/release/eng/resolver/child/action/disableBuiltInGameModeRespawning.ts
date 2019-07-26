/**
 * Disables automatic respawning for one or
 * more players, only allowing respawning by
 * scripting commands.
 */
export const disableBuiltInGameModeRespawning = (
	/**
	 * Player - The player or players whose respawning
	 * is affected. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.PlayersParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	players: string | number | any[]
) => {

	return `Disable Built In Game Mode Respawning(${players})`
}