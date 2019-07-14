/**
 * 팀 또는 경기 내에서 화물 또는
 * 거점을 확보하려는 플레이어 수입니다.
 */
export const numberOfPlayersOnObjective = (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Number Of Players On Objective(${team})`
}