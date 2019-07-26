/**
 * The cross product of the specified values.
 */
export const crossProduct = (
	/**
	 * Value - You must specify the first Value
	 * Syntax to compare to the second.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * Value - You must specify the first Value
	 * Syntax to compare to the second.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Cross Product(${value1}, ${value2})`
}

