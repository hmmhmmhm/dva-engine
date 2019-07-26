/**
 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
 * 방향의 상대적인 횡축각(단위: 도)입니다.
 * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
 * (+/- 180도 범위)
 */
export const horizontalFacingAngleOf = (
	/**
	 * 바라보고 있는 방향의 황축각 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Facing Angle Of(${player})`
}

