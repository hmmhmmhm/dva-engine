import { ValuePlayerType } from '../../../type'

/**
 * 플레이어의 현재 횡축 속도(초당 미터)입니다.
 * 여기에는 모든 종축 움직임이 배제됩니다.
 */
export interface IHorizontalSpeedOf {
    player: ValuePlayerType
}