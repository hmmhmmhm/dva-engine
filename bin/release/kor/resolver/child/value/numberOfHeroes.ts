/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어의 수입니다.
 */
export const numberOfHeroes = (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Type.Hero.`
	 */
	hero: string | number | any[],
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Heroes(${hero}, ${team})`
}

