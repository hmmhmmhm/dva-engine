/**
 * 플레이어에 대해
 * DISABLE BUILT-IN GAME MODE RESPAWNING
 * 액션의 효과를 취소합니다.
 */
export const enableBuiltInGameModeRespawning = (
	/**
	 * 부활 설정의 영향을
	 * 받게 되는 플레이어입니다.
	 * - `PlayersParam.` 또는 `Type.PlayersParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	players: string
) => {

	return `Enable Built In Game Mode Respawning(${players})`
}