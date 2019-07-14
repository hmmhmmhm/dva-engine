/**
 * 지정된 플레이어가 전투준비실에 있는지
 * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
 */
export const isInSpawnRoom = (
	/**
	 * 전투준비실 상태를 확인할 대상 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is In Spawn Room(${player})`
}