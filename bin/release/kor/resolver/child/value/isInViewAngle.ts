/**
 * LOCATION이 플레이어의 시야에 있는지 여부입니다.
 */
export const isInViewAngle = (
	/**
	 * 시야를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 시야에 있는지 테스트할 LOCATION입니다.
	 * - `Type.Vector.`
	 */
	location: string | number | any[],
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	viewAngle: string | number | any[]
) => {

	return `Is In View Angle(${player}, ${location}, ${viewAngle})`
}