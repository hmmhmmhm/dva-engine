/**
 * 플레이어의 현재 궁극기 충전량 비율입니다.
 */
export const ultimateChargePercent = (
	/**
	 * 궁극기 충전량 비율 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Ultimate Charge Percent(${player})`
}