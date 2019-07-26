/**
 * 플레이어의 조준 속도를
 * 일반 조준 속도 대비
 * % 비율로 설정합니다.
 */
export const setAimSpeed = (
	/**
	 * 조준 속도를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 일반 조준 속도에 비례하도록
	 * 설정할 플레이어의 조준 속도입니다.
	 * - `Type.Number.`
	 */
	turnSpeedPercent: string | number | any[]
) => {

	return `Set Aim Speed(${player}, ${turnSpeedPercent})`
}