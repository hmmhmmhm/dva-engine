/**
 * The PLAYER DEALT DAMAGE event attribute
 * will affect the specified players who successfully
 * dealt damage against another player in the
 * game environment.
 */
export const playerDealtDamage = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Player dealt damage(${team}, ${player})`
}