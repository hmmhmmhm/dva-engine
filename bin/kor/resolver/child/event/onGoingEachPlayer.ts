/**
 * 플레이어가 게임에 참여하면
 * 각 플레이어마다 이 Rule의 인스턴스가 생성됩니다.
 * 이 인스턴스는 해당 플레이어가 게임을 떠나거나,
 * 게임이 끝날 때까지 활성화되어 있습니다.
 * 각 인스턴스는 개별적으로 Condition과 Action을 추적하고 실행합니다.
 * 
 * - 플레이어가 게임에 남아있는 한 인스턴스가 지속되므로
 *    Condition을 만족할 수도, 그렇지 않을 수도 있습니다.
 *    Condition을 처음 만족하면Action을 실행합니다.
 * 
 * - Condition 목록을 만족하지 못했다가 만족한다면,
 *    Action을 다시 실행하려 할 것입니다.
 */
export const onGoingEachPlayer = (
	/**
	 * - `Type.TeamConstant.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string,
	/**
	 * - `Type.EventPlayer.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Ongoing - Each Player(${team}, ${player})`
}