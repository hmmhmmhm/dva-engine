/**
 * 깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.
 */
export const isFlagBeingCarried = (
	/**
	 * 깃발을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Is Flag Being Carried(${team})`
}