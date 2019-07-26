/**
 * Causes one or more players to become invisible
 * to either all other players or just enemies.
 */
export const setInvisible = (
	/**
	 * Player - The player or players who will
	 * become invisible. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Invisible to - Specifies for whom the player
	 * or players will be invisible. Can be set
	 * to All, Enemies, or None.
	 * - `Type.InvisibleTo.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	invisibleTo: string | number | any[]
) => {

	return `Set Invisible(${player}, ${invisibleTo})`
}