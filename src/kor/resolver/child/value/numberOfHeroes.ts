/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어의 수입니다.
 */
export const numberOfHeroes = (
	/**
	 * 플레이 현황을 확인할 영웅입니다.
	 * - `Hero.` 또는 `Type.Hero.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	hero: string,
	/**
	 * 영웅 플레이 현황을 확인할 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Number Of Heroes(${hero}, ${team})`
}