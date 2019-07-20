/**
 * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
 * 팀의 제한을 받을 수 있습니다.
 */
export const farthestPlayerFrom = (
	/**
	 * 거리 측정을 위한 위치입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	center: string | number | any[],
	/**
	 * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Farthest Player From(${center}, ${team})`
}