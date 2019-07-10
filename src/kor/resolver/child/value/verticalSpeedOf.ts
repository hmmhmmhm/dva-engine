import { IVerticalSpeedOf } from '../../../interface'

/**
 * 플레이어의 현재 종축 속도(초당 미터)입니다.
 * 여기에는 경사로를 오르내리는 등의 움직임 등
 * 모든 횡축 이동이 배제됩니다.
 */
export const verticalSpeedOf = (value: IVerticalSpeedOf) => {
	return `Vertical Speed Of(${value['player']})`
}