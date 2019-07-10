import { IIsFiringPrimary } from '../../../interface'

/**
 * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
 */
export const isFiringPrimary = (value: IIsFiringPrimary) => {
	return `Is Firing Primary(${value['player']})`
}