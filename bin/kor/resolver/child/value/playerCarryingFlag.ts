/**
 * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
 * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
 */
export const playerCarryingFlag = (
	/**
	 * 깃발을 확인할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Player Carrying Flag(${team})`
}