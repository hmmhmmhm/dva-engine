/**
 * The lesser of the two numbers. This will
 * return a numerical value of two number values compared.
 */
export const min = (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Min(${value1}, ${value2})`
}

