/**
 * 게임 자체에 속한
 * 전역 변수에 값을 저장합니다.
 */
export const setGlobalVariable = (
	/**
	 * 어느 전역 변수에
	 * 값을 저장할지 지정합니다.
	 * - `Type.Variable.`
	 */
	variable: string | number | any[],
	/**
	 * 저장할 값입니다.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Set Global Variable(${variable}, ${value})`
}