/**
 * 플레이어의 궁극기
 * 활성화 여부를 설정합니다.
 */
export const setUltimateCharge = (
	/**
	 * 궁극기 사용에 있어
	 * 영향을 받는 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 최대 충전량 비율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	chargePercent: string | number | any[]
) => {

	return `Set Ultimate Charge(${player}, ${chargePercent})`
}