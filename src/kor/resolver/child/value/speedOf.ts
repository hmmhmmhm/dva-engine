import { ISpeedOf } from '../../../interface'

/**
 * 플레이어의 현재 속도(초당 미터)입니다.
 */
export const speedOf = (value: ISpeedOf) => {
	return `Speed Of(${value['player']})`
}