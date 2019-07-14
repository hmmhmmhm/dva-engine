/**
 * 플레이어의 현재 종축 속도(초당 미터)입니다.
 * 여기에는 경사로를 오르내리는 등의 움직임 등
 * 모든 횡축 이동이 배제됩니다.
 */
export const verticalSpeedOf = (
	/**
	 * 종축 속도 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Vertical Speed Of(${player})`
}