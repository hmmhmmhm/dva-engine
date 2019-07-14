/**
 * 깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.
 */
export const isFlagAtBase = (
	/**
	 * 깃발을 확인할 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Is Flag At Base(${team})`
}