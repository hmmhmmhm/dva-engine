/**
 * The position closest to the specified position
 * that can be stood on and is accessible from a spawn point.
 */
export const nearestWalkablePosition = (
	/**
	 * Position - The position from which to search
	 * for the nearest walkable position. Can use
	 * any Vector based Value syntax to divide with.
	 * - `Type.Vector.`
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Nearest Walkable Position(${position})`
}

