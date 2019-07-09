import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어의 최대 및
 * 최소 이동 수치를 정의합니다.
 * 강제 이동되거나 이동이
 * 제한될 수 있습니다.
 */
export interface IStartForcingThrottle {
    /**
     * 강제 이동되거나 이동이
     * 제한될 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 전방 달리기의 최소값을 설정합니다.
     * 0이면 플레이어가 정지할 수 있지만,
     * 1일 경우 최대 속도로 강제 전방 이동합니다.
     */
    minForward: ValueNumberType
    /**
     * 전방 달리기의 최대값을 설정합니다.
     * 0이면 플레이어가 움직일 수 없지만,
     * 1일 경우 원하는 대로 전방 이동이 가능합니다.
     */
    maxForward: ValueNumberType
    /**
     * 후방 달리기의 최소값을 설정합니다.
     * 0이면 플레이어가 정지할 수 있지만,
     * 1일 경우 최대 속도로 강제 후방 이동합니다.
     */
    minBackward: ValueNumberType
    /**
     * 후방 달리기의 최대값을 설정합니다.
     * 0이면 플레이어가 움직일 수 없지만,
     * 1일 경우 원하는 대로 후방 이동이 가능합니다.
     */
    maxBackward: ValueNumberType
    /**
     * 측방 달리기의 최소값을 설정합니다.
     * 0이면 플레이어가 정지할 수 있지만,
     * 1일 경우 최대 속도로 강제 좌우 측방 이동합니다.
     */
    minSideways: ValueNumberType
    /**
     * 측방 달리기의 최대값을 설정합니다.
     * 0이면 플레이어가 움직일 수 없지만,
     * 1일 경우 원하는 대로 좌우 측방 이동이 가능합니다.
     */
    maxSideways: ValueNumberType
}