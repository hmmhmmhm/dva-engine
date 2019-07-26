/**
 * A vector composed of three real numbers
 * (X, Y, Z) where X is left, Y is Up, and
 * Z is forward. Vectors are used for position,
 * direction, and velocity.
 */
export const vector = (
	/**
	 * X - The X value of the Vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	x: string | number | any[],
	/**
	 * Y - The Y value of the vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	y: string | number | any[],
	/**
	 * Z - The Z value of the Vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	z: string | number | any[]
): number => {

	// @ts-ignore
	return `Vector(${x}, ${y}, ${z})`
}

