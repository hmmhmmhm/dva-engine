/**
 * 게임 자체에 속한
 * 전역 변수에 값을 저장합니다.
 */
export const setGlobalVariable = (
	/**
	 * 어느 전역 변수에
	 * 값을 저장할지 지정합니다.
	 * - `Variable.` 또는 `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string,
	/**
	 * 저장할 값입니다.
	 * - `Value.` 또는 `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string
) => {

	return `Set Global Variable(${variable}, ${value})`
}