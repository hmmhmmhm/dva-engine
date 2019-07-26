/**
 * 3개의 실수(X, Y, Z)로 이루어진 벡터입니다.
 * X는 좌측, Y는 위, Z는 전방을 의미합니다.
 * 벡터는 위치, 방향, 속도로 사용됩니다.
 */
export const vector = (
	/**
	 * 벡터의 X 값입니다.
	 * - `Type.Number.`
	 */
	x: string | number | any[],
	/**
	 * 벡터의 Y 값입니다.
	 * - `Type.Number.`
	 */
	y: string | number | any[],
	/**
	 * 벡터의 Z 값입니다.
	 * - `Type.Number.`
	 */
	z: string | number | any[]
): number => {

	// @ts-ignore
	return `Vector(${x}, ${y}, ${z})`
}

