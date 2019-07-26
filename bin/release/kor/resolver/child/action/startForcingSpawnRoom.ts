/**
 * 지정된 게임 모드에서 원래 사용되는
 * 전투준비실인지와는 관계없이,
 * 팀을 지정된 전투준비실에 강제로 생성합니다.
 * 이 액션은 점령, 점령/호위,
 * 호위 전장에서만 효과가 있습니다.
 */
export const startForcingSpawnRoom = (
	/**
	 * 전투준비실을
	 * 강제할 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[],
	/**
	 * 강제된 전투준비실의 번호입니다.
	 * 0이 첫 번째 전투준비실이며,
	 * 1이 두 번째, 2가 세 번째입니다.
	 * 지정된 방이 존재하지 않는 경우,
	 * 모든 플레이어는 일반
	 * 전투준비실을 사용합니다.
	 * - `Type.Number.`
	 */
	room: string | number | any[]
) => {

	return `Start Forcing Spawn Room(${team}, ${room})`
}