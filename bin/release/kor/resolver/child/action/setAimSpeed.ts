/**
 * 플레이어의 조준 속도를
 * 일반 조준 속도 대비
 * % 비율로 설정합니다.
 */
export const setAimSpeed = (
	/**
	 * 조준 속도를 설정할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 일반 조준 속도에 비례하도록
	 * 설정할 플레이어의 조준 속도입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	turnSpeedPercent: string | number | any[]
) => {

	return `Set Aim Speed(${player}, ${turnSpeedPercent})`
}