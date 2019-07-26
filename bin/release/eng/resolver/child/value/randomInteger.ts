/**
 * A random integer between the specified min
 * and max, inclusive.
 */
export const randomInteger = (
	/**
	 * MIN - The smallest integer allowed. If a
	 * real number is provided to this input, it
	 * is rounded to the nearest integer. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	min: string | number | any[],
	/**
	 * MAX - The largest integer allowed. If a
	 * real number is provided to this input, it
	 * is rounded to the nearest integer. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	max: string | number | any[]
): number => {

	// @ts-ignore
	return `Random Integer(${min}, ${max})`
}

