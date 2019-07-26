/**
 * 플레이어가 지정된 방향을
 * 바라보도록 설정합니다.
 */
export const setFacing = (
	/**
	 * 바라보는 방향을
	 * 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 플레이어가 바라보게
	 * 되는 단위 방향입니다.
	 * 이 값은 내부적으로 정규화됩니다.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[]
) => {

	return `Set Facing(${player}, ${direction})`
}