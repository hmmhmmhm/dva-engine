/**
 * 게임 자체에 종속된
 * 전역 변수 값을 수정합니다.
 */
export const modifyPlayerVariable = (
	/**
	 * 변수를 수정할 플레이어입니다.
	 * 플레이어가 다수인 경우,
	 * 각각의 변수가 설정입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 수정할 플레이어의 변수입니다.
	 * - `Type.IPlayer.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string,
	/**
	 * 변수값의 변경 방식입니다.
	 * 일반적인 사칙연산,
	 * 그리고 값의 추가 및 제거를 위한
	 * ARRAY 연산 등의 옵션이 있습니다.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	operation: string,
	/**
	 * 수정에 사용되는 값입니다.
	 * 사칙연산의 경우 이것은
	 * 두 피연산자 중 두 번째로,
	 * 나머지 하나는 변수의
	 * 현재 값으로 사용됩니다.
	 * 배열 연산에서는
	 * 이 값을 추가 또는 제거합니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string
) => {

	return `Modify Player Variable(${player}, ${variable}, ${operation}, ${value})`
}