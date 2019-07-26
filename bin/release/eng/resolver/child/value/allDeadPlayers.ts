/**
 * An array containing all dead players on
 * a team in a match. A player is defined as
 * being dead when they are eliminated but
 * have not yet respawned back into the game.
 */
export const allDeadPlayers = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Dead Players(${team})`
}

