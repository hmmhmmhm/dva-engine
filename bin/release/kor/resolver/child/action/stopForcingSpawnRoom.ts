/**
 * 지정된 팀에 대한
 * START FORCING SPAWN ROOM
 * 액션의 효과를 취소합니다.
 */
export const stopForcingSpawnRoom = (
	/**
	 * 일반 전투실을 사용해
	 * 플레이를 재개하게 될 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Stop Forcing Spawn Room(${team})`
}