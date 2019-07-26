/**
 * The PLAYER DEALT FINAL BLOW event attribute
 * will affect the specified players who successfully
 * dealt the lethal damage against another
 * player in the game environment.
 */
export const playerDealtFinalBlow = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Player dealt final blow(${team}, ${player})`
}