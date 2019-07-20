/**
 * SET STATUS 액션을 통해
 * 플레이어에게 적용된
 * 상태 하나를 제거합니다.
 */
export const clearStatus = (
	/**
	 * 상태를 제거할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 플레이어에게서 제거할 상태입니다.
	 * - `Type.Status.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	status: string | number | any[]
) => {

	return `Clear Status(${player}, ${status})`
}