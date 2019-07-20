/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어의 수입니다.
 */
export const numberOfHeroes = (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Type.Hero.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	hero: string | number | any[],
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Heroes(${hero}, ${team})`
}

