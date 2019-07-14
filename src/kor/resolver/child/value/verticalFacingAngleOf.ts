/**
 * 월드에 대해 상대적으로 플레이어가
 * 바라보고 있는 방향의 종축각(단위: 도)입니다.
 * 이 값은 플레이어가 내려다보는 경우 증가합니다.
 */
export const verticalFacingAngleOf = (
	/**
	 * 바라보고 있는 방향의
	 * 종축각 정보를 가져올 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Vertical Facing Angle Of(${player})`
}