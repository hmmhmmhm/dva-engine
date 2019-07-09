import { ValuePlayerType } from '../../../type'

/**
 * 플레이어에 대해 START FACING
 * 액션에 의해 시작된 회전을 중지합니다.
 */
export interface IStopFacing {
    /**
     * 회전을 멈출 플레이어입니다.
     */
    player: ValuePlayerType
}