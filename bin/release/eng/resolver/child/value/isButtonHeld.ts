/**
 * Whether a player is holding a specific button.
 */
export const isButtonHeld = (
	/**
	 * Player - The player whose button to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Button - The button to check. Designed by
	 * any action inputs by ability but not directional
	 * inputs. (i.e. Primary Fire, Secondary Fire,
	 * Ultimate Ability, Jump, Crouch, etc.)
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Is Button Held(${player}, ${button})`
}