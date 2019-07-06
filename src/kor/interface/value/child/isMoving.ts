import {
    ValuePlayerType,
} from '../../../type'

/**
 * 플레이어가 이동하고 있는지
 * 여부(현재 속도가 0인지 여부로 판단)입니다.
 */
export interface IIsMoving {
    /**
     * 이동 상태를 확인할 대상 플레이어입니다.
     */
    player: ValuePlayerType
}