/**
 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
 * 팀 또는 시야 범위로 제한할 수 있습니다.
 */
export const playersWithinRadius = (
	/**
	 * 거리 측정이 시작되는 중간 위치입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	center: string,
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 반경(미터)입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	radius: string,
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string,
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 시야 확인을
	 * 통과해야 하는지 여부 및
	 * 방법을 지정합니다.
	 * - `LosCheck.` 또는 `Type.LosCheck.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	losCheck: string
) => {

	return `Players Within Radius(${center}, ${radius}, ${team}, ${losCheck})`
}