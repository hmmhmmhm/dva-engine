/**
 * The PLAYER TOOK DAMAGE event attribute will
 * affect the specified players who received
 * damage in the game environment.
 */
export const playerTookDamage = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Player took damage(${team}, ${player})`
}