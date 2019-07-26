/**
 * Whether a player is holding a specific button.
 */
export const isButtonHeld = (
	/**
	 * Player - The player whose button to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Button - The button to check. Designed by
	 * any action inputs by ability but not directional
	 * inputs. (i.e. Primary Fire, Secondary Fire,
	 * Ultimate Ability, Jump, Crouch, etc.)
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Is Button Held(${player}, ${button})`
}