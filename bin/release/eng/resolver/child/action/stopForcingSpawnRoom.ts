/**
 * Undoes the effect of start forcing spawn
 * room action for the specified team.
 */
export const stopForcingSpawnRoom = (
	/**
	 * Team - The team that will resume using their
	 * normal spawn room. Can use most Team based Value Syntax.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Stop Forcing Spawn Room(${team})`
}