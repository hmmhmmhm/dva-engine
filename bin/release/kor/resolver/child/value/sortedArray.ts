/**
 * 지정된 배열의 각 요소를
 * VALUE RANK에 따라 평가하고
 * 정렬해서 만든 새 배열 복사본입니다.
 */
export const sortedArray = (
	/**
	 * 복사본을 정렬할 배열입니다.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * 복사할 배열의 각 요소마다 평가할 값입니다.
	 * 이 값의 순서에 따라 오름차순으로 복사본이 정렬됩니다.
	 * 현재 확인 대상인 배열의 요소를 참조할 때는
	 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
	 * - `Type.Value.`
	 */
	valueRank: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Sorted Array(${array}, ${valueRank})`
}

