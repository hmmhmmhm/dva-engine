/**
 * 플레이어의 이동 중력을
 * 일반 이동 중력 대비
 * % 비율로 설정합니다.
 */
export const setGravity = (
	/**
	 * 이동 중력을 설정할
	 * 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 일반 이동 중력에 비례하도록
	 * 설정할 플레이어의
	 * 개인 이동 중력 비율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	gravityPercent: string
) => {

	return `Set Gravity(${player}, ${gravityPercent})`
}