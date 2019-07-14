/**
 * 진행 중인 플레이어 변수 추적을 중지하고
 * 해당 변수의 현재 값을 그대로 유지합니다.
 */
export const stopChasingPlayerVariable = (
	/**
	 * 변수 반경을 중지할
	 * 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수는
	 * 변경되지 않습니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 수정을 중지할
	 * 플레이어의 변수를
	 * 지정합니다.
	 * - `Variable.` 또는 `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string
) => {

	return `Stop Chasing Player Variable(${player}, ${variable})`
}