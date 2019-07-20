/**
 * 팀 상수입니다. ALL 옵션은 팀전의 양팀,
 * 또는 개별 전투 게임의 모든 플레이어를 뜻합니다.
 */
export const team = (
	/**
	 * - `Type.TeamConstant.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Team(${team})`
}