/**
 * The position of a specific team’s flag in
 * Capture the Flag.
 */
export const flagPosition = (
	/**
	 * Team - The team whose flag position to acquire.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Flag Position(${team})`
}

