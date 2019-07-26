/**
 * The horizontal angle in degrees corresponding
 * to the specified direction vector.
 */
export const horizontalAngleFromDirection = (
	/**
	 * Direction - The direction vector from which
	 * to acquire a horizontal angle in degrees.
	 * The vector is unitized before calculation
	 * begins. Can use most Vector based Value
	 * Syntax to retrieve this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Angle From Direction(${direction})`
}

