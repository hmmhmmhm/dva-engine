/**
 * The player carrying a particular team’s
 * flag in capture the flag. Results in null
 * if no player is carrying the flag.
 */
export const playerCarryingFlag = (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Player Carrying Flag(${team})`
}