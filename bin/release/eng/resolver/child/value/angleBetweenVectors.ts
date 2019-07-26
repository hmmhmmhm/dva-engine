/**
 * The angle in degrees between two directional
 * vectors (no normalization required).
 */
export const angleBetweenVectors = (
	/**
	 * Vector - One of two directional vectors
	 * between which to measure the angle in degrees.
	 * this vector does not need to be pre-normalized.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector1: string | number | any[],
	/**
	 * Vector - One of two directional vectors
	 * between which to measure the angle in degrees.
	 * this vector does not need to be pre-normalized.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector2: string | number | any[]
): number => {

	// @ts-ignore
	return `Angle Between Vectors(${vector1}, ${vector2})`
}

