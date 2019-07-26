/**
 * Whether a specific player is in the spawn
 * room (and is thus being healed and able
 * to change heroes).
 */
export const isInSpawnRoom = (
	/**
	 * Player - The player whose spawn room status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is In Spawn Room(${player})`
}