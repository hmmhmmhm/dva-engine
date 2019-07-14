/**
 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
 */
export const playersInSlot = (
	/**
	 * 플레이어 정보를 가져올 슬롯 번호입니다.
	 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	slot: string,
	/**
	 * 플레이어 정보를 가져올 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Players In Slot(${slot}, ${team})`
}