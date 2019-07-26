/**
 * The PLAYER EARNED ELIMINATION event attribute
 * will affect the specified players who successfully
 * score an elimination in the game environment.
 */
export const playerEarnedElimination = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Player earned elimination(${team}, ${player})`
}