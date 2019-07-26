/**
 * 플레이어가 사용할 수 있는 영웅 목록을
 * 게임 설정에 지정한 대로 복원합니다.
 * 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면
 * 플레이어는 강제로 다른 영웅을 선택하여
 * 적절한 생성 지점에서 부활합니다.
 */
export const resetPlayerHeroAvailability = (
	/**
	 * 영웅 목록을 초기화할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Reset Player Hero Availability(${player})`
}