import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어의 현재 궁극기 충전량 비율입니다.
 */
export const ultimateChargePercent = (
	/**
	 * 궁극기 충전량 비율 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Ultimate Charge Percent(${player})`
}