/**
 * The player closest to a position, optionally
 * restricted by team.
 */
export const closestPlayerTo = (
	/**
	 * Center - The position to which to measure
	 * proximity. Can use most Value Syntax related
	 * to reporting a position in the map.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	center: string | number | any[],
	/**
	 * Team - You can specify any Team Syntax to
	 * restrict which players is reported when
	 * defining this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Closest Player To(${center}, ${team})`
}