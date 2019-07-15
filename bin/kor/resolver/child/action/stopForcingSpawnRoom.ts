/**
 * 지정된 팀에 대한
 * START FORCING SPAWN ROOM
 * 액션의 효과를 취소합니다.
 */
export const stopForcingSpawnRoom = (
	/**
	 * 일반 전투실을 사용해
	 * 플레이를 재개하게 될 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Stop Forcing Spawn Room(${team})`
}