/**
 * Stops all forced camera positions started
 * by the start camera or one or more players.
 */
export const stopCamera = (
	/**
	 * Player - The player or players whose forced
	 * camera positions will stop. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop Camera(${player})`
}