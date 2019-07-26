/**
 * The vector in local coordinates corresponding
 * to the provided vector in world coordinates.
 */
export const localVectorOf = (
	/**
	 * World Vector - The vector in world coordinates
	 * that will be converted to local coordinates.
	 * Can use most Vector based Value Syntax to
	 * provide this data.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	worldVector: string | number | any[],
	/**
	 * Local vector - The vector in local coordinates
	 * that will be converted to world coordinates.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	relativePlayer: string | number | any[],
	/**
	 * Relative Player - The player to whom the
	 * local vector is relative. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Transformation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	transformation: string | number | any[]
): number => {

	// @ts-ignore
	return `Local Vector Of(${worldVector}, ${relativePlayer}, ${transformation})`
}

