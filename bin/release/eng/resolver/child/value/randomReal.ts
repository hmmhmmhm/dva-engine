/**
 * A random real number between the specified min and max.
 */
export const randomReal = (
	/**
	 * MIN - The smallest real number allowed.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	min: string | number | any[],
	/**
	 * MAX - The largest real number allowed. Can
	 * use most Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	max: string | number | any[]
): number => {

	// @ts-ignore
	return `Random Real(${min}, ${max})`
}

