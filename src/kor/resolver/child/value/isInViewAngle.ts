/**
 * 두 위치가 서로 보이는지 여부입니다.
 */
export const isInViewAngle = (
	/**
	 * 시야를 확인할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 시야에 있는지 테스트할 LOCATION입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	location: string,
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	viewAngle: string
) => {

	return `Is In View Angle(${player}, ${location}, ${viewAngle})`
}