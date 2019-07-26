/**
 * The integer to which the specified value rounds.
 */
export const roundToInteger = (
	/**
	 * Value - The real number to round. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[],
	/**
	 * Rounding Type - Determines the direction
	 * in which the value will be rounded. You
	 * can round up, down, or to the nearest integer.
	 * - `Type.Rounding.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	roundingType: string | number | any[]
): number => {

	// @ts-ignore
	return `Round To Integer(${value}, ${roundingType})`
}

