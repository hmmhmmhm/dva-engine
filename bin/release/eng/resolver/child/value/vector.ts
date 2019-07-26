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
	 * - `Type.Number.`
	 */
	x: string | number | any[],
	/**
	 * Y - The Y value of the vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	y: string | number | any[],
	/**
	 * Z - The Z value of the Vector. Can use most
	 * Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	z: string | number | any[]
): number => {

	// @ts-ignore
	return `Vector(${x}, ${y}, ${z})`
}

