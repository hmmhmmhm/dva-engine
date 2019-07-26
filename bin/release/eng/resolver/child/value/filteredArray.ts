/**
 * A copy of the specified array with any values
 * that do not match the specified condition removed.
 */
export const filteredArray = (
	/**
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Filtered Array(${array}, ${condition})`
}

