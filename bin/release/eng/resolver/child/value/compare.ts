/**
 * Whether the comparison of the two inputs is true.
 */
export const compare = (
	/**
	 * Value - The left hand side of the comparison.
	 * This may be any value type if the operation
	 * is == or =!, otherwise real numbers are
	 * expected. Can use most Value Syntax for the comparison.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * - `Type.Operator.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	operator: string | number | any[],
	/**
	 * Condition - One of the standard conditions
	 * to use for comparison. See the Condition
	 * section for details.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
) => {

	return `Compare(${value1}, ${operator}, ${value2})`
}