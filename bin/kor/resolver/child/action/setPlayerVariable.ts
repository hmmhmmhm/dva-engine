/**
 * 지정된 플레이어에
 * 속한 플레이어 변수에
 * 값 하나를 저장합니다.
 */
export const setPlayerVariable = (
	/**
	 * 변수를 설정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 설정됩니다
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 값을 저장할 플레이어의
	 * 변수를 지정합니다.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * 저장할 값입니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Set Player Variable(${player}, ${variable}, ${value})`
}