/**
 * Forces a team to spawn in a particular spawn
 * room, regardless of the sapwn room normally
 * used by the game mode. This action only
 * has an effect in Assault, Hybrid, and Payload Maps.
 */
export const startForcingSpawnRoom = (
	/**
	 * Team - The team whose spawn room will be
	 * forced. Can use most Team based Value Syntax.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * Room - The number of the spawn room to be
	 * forced. 0 is the first spawn room, 1 is
	 * the second, and 2 is the third. If this
	 * specified spawn room does not exist. Players
	 * will use the normal spawn room. Can use
	 * most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	room: string | number | any[]
) => {

	return `Start Forcing Spawn Room(${team}, ${room})`
}