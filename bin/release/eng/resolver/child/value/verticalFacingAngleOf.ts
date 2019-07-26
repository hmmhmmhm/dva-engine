/**
 * The vertical angle in degrees, of a player’s
 * current facing relative to the world. This
 * value increases as the player looks down.
 */
export const verticalFacingAngleOf = (
	/**
	 * Player - The player whose vertical facing
	 * angle to acquire. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Vertical Facing Angle Of(${player})`
}

