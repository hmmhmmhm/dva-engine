/**
 * Whether a specific team's flag is being
 * is being carried by a member of the opposing
 * team in capture the flag.
 */
export const isFlagBeingCarried = (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Is Flag Being Carried(${team})`
}