import { IAltitudeOf } from '../../../interface'

/**
 * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
 * 플레이어가 표면에 있으면 0입니다.
 */
export const altitudeOf = (value: IAltitudeOf) => {
	return `Altitude Of(${value['player']})`
}