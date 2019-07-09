import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어의 이동 속도를
 * 순수 이동 속도 대비
 * % 비율로 설정합니다.
 */
export interface ISetMoveSpeed {
    /**
     * 이동 속도를 설정할
     * 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 순수 최대 생명력에
     * 비례하도록 설정할
     * 플레이어의 최대
     * 생명력 비율입니다.
     */
    moveSpeedPercent: ValueNumberType
}