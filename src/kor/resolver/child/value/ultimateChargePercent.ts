import { IUltimateChargePercent } from '../../../interface'

/**
 * 플레이어의 현재 궁극기 충전량 비율입니다.
 */
export const ultimateChargePercent = (value: IUltimateChargePercent) => {
	return `Ultimate Charge Percent(${value['player']})`
}