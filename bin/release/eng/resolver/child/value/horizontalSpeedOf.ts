/**
 * The current horizontal speed of a player
 * in meters per second. This measurement excludes
 * all vertical motion.
 */
export const horizontalSpeedOf = (
	/**
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Speed Of(${player})`
}

