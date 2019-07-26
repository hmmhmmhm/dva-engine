/**
 * Whether a specific player’s portrait is on fire.
 */
export const isPortraitOnFire = (
	/**
	 * Player - The player whose portrait to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Portrait On Fire(${player})`
}