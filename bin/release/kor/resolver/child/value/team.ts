/**
 * 팀 상수입니다. ALL 옵션은 팀전의 양팀,
 * 또는 개별 전투 게임의 모든 플레이어를 뜻합니다.
 */
export const team = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[]
) => {

	return `Team(${team})`
}