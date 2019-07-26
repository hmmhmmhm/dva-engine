/**
 * The remainder of the left-hand operand divided
 * by the right-hand operand. Any number modulo
 * zero will result in zero. This will return
 * a numerical value of two number values compared.
 * For example 7 divided by 2 will result in
 * 1 for the Modulo.
 */
export const modulo = (
	/**
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Modulo(${value1}, ${value2})`
}

