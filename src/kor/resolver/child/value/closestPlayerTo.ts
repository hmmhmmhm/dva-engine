/**
 * 한 위치에서 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
export const closestPlayerTo = (
	/**
	 * 거리를 측정할 위치입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	center: string,
	/**
	 * 가장 가까이 있는 플레이어가 소속된 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Closest Player To(${center}, ${team})`
}