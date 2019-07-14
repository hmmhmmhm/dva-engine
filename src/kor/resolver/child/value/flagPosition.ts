/**
 * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
 */
export const flagPosition = (
	/**
	 * 깃발 위치 정보를 가져올 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Flag Position(${team})`
}