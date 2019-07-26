/**
 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
 * 팀 또는 시야 범위로 제한할 수 있습니다.
 */
export const playersWithinRadius = (
	/**
	 * 거리 측정이 시작되는 중간 위치입니다.
	 * - `Type.Vector.`
	 */
	center: string | number | any[],
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 반경(미터)입니다.
	 * - `Type.Number.`
	 */
	radius: string | number | any[],
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 속해 있어야 하는
	 * 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[],
	/**
	 * 결과 배열에 포함되기 위해
	 * 플레이어가 시야 확인을
	 * 통과해야 하는지 여부 및
	 * 방법을 지정합니다.
	 * - `Type.LosCheck.`
	 */
	losCheck: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players Within Radius(${center}, ${radius}, ${team}, ${losCheck})`
}

