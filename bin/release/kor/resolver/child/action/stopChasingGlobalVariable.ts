/**
 * 진행 중인 전역 변수 추적을 중지하고
 * 해당 변수의 현재 값을 그대로 유지합니다.
 */
export const stopChasingGlobalVariable = (
	/**
	 * 수정을 중지할
	 * 전역 변수를 지정합니다.
	 * - `Type.Variable.`
	 */
	variable: string | number | any[]
) => {

	return `Stop Chasing Global Variable(${variable})`
}