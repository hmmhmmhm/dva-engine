/**
 * 팀 또는 경기 내 모든 플레이어가 있는 배열입니다.
 */
export const allPlayers = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Players(${team})`
}

