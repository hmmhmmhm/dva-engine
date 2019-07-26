/**
 * Enables or disables ability 1 for one or more players.
 */
export const setAbility1Enabled = (
	/**
	 * Player - The player or players whose access
	 * to ability 1 is affected. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use ability 1. Expects
	 * a Boolean Value such as True, False, or
	 * Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	enabled: string | number | any[]
) => {

	return `Set Ability 1 Enabled(${player}, ${enabled})`
}