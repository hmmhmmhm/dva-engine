/**
 * Undoes the effect of start forcing spawn
 * room action for the specified team.
 */
export const stopForcingSpawnRoom = (
	/**
	 * Team - The team that will resume using their
	 * normal spawn room. Can use most Team based Value Syntax.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Stop Forcing Spawn Room(${team})`
}