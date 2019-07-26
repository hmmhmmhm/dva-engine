/**
 * 하나 이상의 값(있는 경우)이
 * 제거된 배열의 복사본입니다.
 */
export const removeFromArray = (
	/**
	 * 값을 제거할 배열입니다.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * 배열에서 제거할 값(있는 경우)입니다.
	 * 이 값 자체가 배열인 경우
	 * 일치하는 각 요소가 제거됩니다.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Remove From Array(${array}, ${value})`
}

