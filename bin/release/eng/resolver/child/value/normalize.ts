/**
 * The unit-length normalization of a vector.
 */
export const normalize = (
	/**
	 * Vector - The vector to normalize. Can use
	 * any Vector based Value syntax to divide with.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Normalize(${position})`
}

