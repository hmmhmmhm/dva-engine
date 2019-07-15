/**
 * 플레이어를 지정 위치로
 * 순간이동시킵니다.
 */
export const teleport = (
	/**
	 * 순간이동할
	 * 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어가 순간이동하게 될 위치입니다.
	 * 플레이어가 설정되어 있으면
	 * 해당 플레이어의 위치가 사용됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string
) => {

	return `Teleport(${player}, ${position})`
}