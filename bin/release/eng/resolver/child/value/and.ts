/**
 * Whether both of the two inputs are true
 * or equivalent to true.
 */
export const and = (
	/**
	 * Value - You can specify any Value Syntax
	 * to define both of the required values.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * Value - One of the two inputs considered.
	 * if both are true (or equivalent to true),
	 * then the and value is true.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
) => {

	return `And(${value1}, ${value2})`
}