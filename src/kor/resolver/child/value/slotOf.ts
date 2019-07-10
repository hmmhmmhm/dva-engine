import { ISlotOf } from '../../../interface'

/**
 * 지정된 플레이어의 슬롯 번호입니다.
 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
 */
export const slotOf = (value: ISlotOf) => {
	return `Slot Of(${value['player']})`
}