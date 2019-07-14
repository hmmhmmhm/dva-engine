/**
 * 플레이어가 받는 치유량을
 * 순수 치유량 대비
 * % 비율로 설정합니다.
 */
export const setHealingReceived = (
	/**
	 * 받는 치유량을 설정할
	 * 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 받는 순수 치유량에
	 * 비례하도록 설정할
	 * 플레이어의 받는
	 * 치유량 비율입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healingReceivedPercent: string
) => {

	return `Set Healing Received(${player}, ${healingReceivedPercent})`
}