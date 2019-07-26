/**
 * The unit-length direction vector corresponding
 * to the specified angles.
 */
export const directionFromAngles = (
	/**
	 * Horizontal Angle - The horizontal angle
	 * in degrees used to construct the resulting
	 * vector. Most angle based Value Syntax can be used here.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	horizontalAngle: string | number | any[],
	/**
	 * Vertical Angle - The vertical angle in degrees
	 * used to construct the resulting vector.
	 * Most angle based Value Syntax can be used here.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	verticalAngle: string | number | any[]
): number => {

	// @ts-ignore
	return `Direction From Angles(${horizontalAngle}, ${verticalAngle})`
}

