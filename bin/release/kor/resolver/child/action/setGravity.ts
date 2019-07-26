/**
 * 플레이어의 이동 중력을
 * 일반 이동 중력 대비
 * % 비율로 설정합니다.
 */
export const setGravity = (
	/**
	 * 이동 중력을 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 일반 이동 중력에 비례하도록
	 * 설정할 플레이어의
	 * 개인 이동 중력 비율입니다.
	 * - `Type.Number.`
	 */
	gravityPercent: string | number | any[]
) => {

	return `Set Gravity(${player}, ${gravityPercent})`
}