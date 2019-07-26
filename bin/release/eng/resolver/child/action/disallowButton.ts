/**
 * Disables a logical button for one or more
 * players such that pressing it has no effect.
 */
export const disallowButton = (
	/**
	 * Player - The player executing this rule,
	 * as specified by the event. May be the same
	 * as the attacker or victim. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Button - The logical button that is being disabled.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Disallow Button(${player}, ${button})`
}