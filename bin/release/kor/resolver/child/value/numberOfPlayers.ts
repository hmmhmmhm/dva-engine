/**
 * 팀 또는 경기 내 존재하는 플레이어 수입니다.
 */
export const numberOfPlayers = (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Players(${team})`
}

