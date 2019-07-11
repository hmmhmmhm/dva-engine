import { 
	ValueNumberType,
	ValueTeamType,
 } from '../../../interface'

/**
 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
 */
export const playersInSlot = (
	/**
	 * 플레이어 정보를 가져올 슬롯 번호입니다.
	 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
	 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
	 */
	slot: ValueNumberType,
	/**
	 * 플레이어 정보를 가져올 팀입니다.
	 */
	team: ValueTeamType
) => {

	return `Players In Slot(${slot}, ${team})`
}