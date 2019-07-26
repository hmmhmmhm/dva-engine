/**
 * The player hit by the ray cast (or null
 * if no player is hit).
 */
export const rayCastHitPlayer = (
	/**
	 * Start POS - The start position for the ray
	 * cast. If a player is provided. A position
	 * 2 meters above the player’s feet is used.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string | number | any[],
	/**
	 * End POS - The end position for the ray cast.
	 * If a player is provided. A position 2 meters
	 * above the player’s feet is used. Can use
	 * most Vector based Value Syntax to provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string | number | any[],
	/**
	 * Players to include - Which players can be
	 * hit by this ray cast. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	playersToInclude: string | number | any[],
	/**
	 * Players to exclude - Which players cannot
	 * be hit by this ray cast. This list takes
	 * precedence over players to include. Can
	 * use most Player based Value Syntax to provide this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	playersToExclude: string | number | any[],
	/**
	 * Include player owned objects - Whether player
	 * owned objects (such as barriers or turrets)
	 * should be included in the ray cast. Can
	 * use most Boolean based Value Syntax to provide this value.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	IncludePlayerOwnedObjects: string | number | any[]
): number => {

	// @ts-ignore
	return `Ray Cast Hit Player(${startPos}, ${endPos}, ${playersToInclude}, ${playersToExclude}, ${IncludePlayerOwnedObjects})`
}

