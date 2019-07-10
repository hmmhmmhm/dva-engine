import { IPlayersInSlot } from '../../../interface'

/**
 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
 */
export const playersInSlot = (value: IPlayersInSlot) => {
	return `Players In Slot(${value['slot']}, ${value['team']})`
}