/**
 * 지정된 플레이어의 조준선에서
 * 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
export const playerClosestToReticle = (
	/**
	 * 이 플레이어의 조준선으로부터
	 * 가장 가까운 플레이어를 검색합니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 가장 가까운 플레이어를 검색할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Player Closest To Reticle(${player}, ${team})`
}