import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어의 조준 속도를
 * 일반 조준 속도 대비
 * % 비율로 설정합니다.
 */
export interface ISetAimSpeed {
    /**
     * 조준 속도를 설정할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 일반 조준 속도에 비례하도록
     * 설정할 플레이어의 조준 속도입니다.
     */
    turnSpeedPercent: ValueNumberType
}