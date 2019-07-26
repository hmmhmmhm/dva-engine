/**
 * The PLAYER DIED event attribute will affect
 * the specified players who died in the game environment.
 */
export const playerDied = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Player Died(${team}, ${player})`
}