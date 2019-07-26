/**
 * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
 */
export const isHeroBeingPlayed = (
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
) => {

	return `Is Hero Being Played(${hero}, ${team})`
}