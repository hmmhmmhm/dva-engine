/**
 * 팀 또는 경기 내 사망 플레이어 수입니다.
 */
export const numberOfDeadPlayers = (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Dead Players(${team})`
}

