/**
 * 한 플레이어에 종속된
 * 플레이어 변수의 배열을
 * 찾거나 생성한 후,
 * 값 하나를 배열의
 * 특정 인덱스에 저장합니다.
 */
export const setPlayerVariableIndex = (
	/**
	 * 변수를 수정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 수정됩니다
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 플레이어 변수 값을
	 * 수정할 배열에 지정합니다.
	 * 변수값이 배열이 아닌 경우,
	 * 해당 값은 빈 배열이 됩니다.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * 수정할 배열의 인덱스입니다.
	 * 인덱스가 배열의 끝을 벗어난 경우,
	 * 해당 배열이 확장되며
	 * 새 요소는 0의 값을 가집니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string | number | any[],
	/**
	 * 배열에 저장할 값입니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Set Player Variable Index(${player}, ${variable}, ${index}, ${value})`
}