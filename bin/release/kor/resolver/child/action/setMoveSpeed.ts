/**
 * 플레이어의 이동 속도를
 * 순수 이동 속도 대비
 * % 비율로 설정합니다.
 */
export const setMoveSpeed = (
	/**
	 * 이동 속도를 설정할
	 * 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 순수 최대 생명력에
	 * 비례하도록 설정할
	 * 플레이어의 최대
	 * 생명력 비율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	moveSpeedPercent: string | number | any[]
) => {

	return `Set Move Speed(${player}, ${moveSpeedPercent})`
}