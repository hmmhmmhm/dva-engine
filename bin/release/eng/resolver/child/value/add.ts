/**
 * The sum of two numbers or vectors. This
 * value will add the two specified values.
 */
export const add = (
	/**
	 * Value - You can specify any Value Syntax
	 * to define either addend.
	 * - `Type.Add.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand. may be any
	 * value that results in a number or a vector.
	 * - `Type.Add.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Add(${value1}, ${value2})`
}

