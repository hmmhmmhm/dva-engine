/**
 * The ONGOING - EACH PLAYER event attribute
 * will affect the specified players in the
 * game environment.
 */
export const onGoingEachPlayer = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Ongoing - Each Player(${team}, ${player})`
}