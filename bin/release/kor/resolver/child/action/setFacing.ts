/**
 * 플레이어가 지정된 방향을
 * 바라보도록 설정합니다.
 */
export const setFacing = (
	/**
	 * 바라보는 방향을
	 * 설정할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 플레이어가 바라보게
	 * 되는 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[]
) => {

	return `Set Facing(${player}, ${direction})`
}