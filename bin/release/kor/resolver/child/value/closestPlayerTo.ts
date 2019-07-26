/**
 * 한 위치에서 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
export const closestPlayerTo = (
	/**
	 * 거리를 측정할 위치입니다.
	 * - `Type.Vector.`
	 */
	center: string | number | any[],
	/**
	 * 가장 가까이 있는 플레이어가 소속된 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Closest Player To(${center}, ${team})`
}