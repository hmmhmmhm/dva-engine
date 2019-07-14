/**
 * 지정된 플레이어의 슬롯 번호입니다.
 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
 */
export const slotOf = (
	/**
	 * 슬롯 번호 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Slot Of(${player})`
}