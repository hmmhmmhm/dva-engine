import { ValuePlayerType, ValueVectorType } from '../../../type'

/**
 * 지정된 방향에서 플레이어의
 * 현재 속도(초당 미터)입니다.
 */
export interface ISpeedOfInDirection {
    /**
     * 속도 정보를 가져올 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어의 속도를 측정할 이동 방향입니다.
     */
    direction: ValueVectorType
}