import { ValuePlayerType, ValueVectorType, ValueNumberType, ValueRelativeType, ValueMotionType } from '../../../type'

/**
 * 플레이어의 움직임에 즉각적인 속도 변화를 줍니다.
 */
export interface IApplyImpulse {
    /**
     * 속도를 변경할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 충격량을 적용할 단위 방항입니다.
     * 이 값은 내부적으로 정규화됩니다.
     */
    direction: ValueVectorType
    /**
     * 플레이어에 대한 속도 변경의 크기입니다.
     */
    speed: ValueNumberType
    /**
     * 방향이 플레이어의 월드 좌표 또는
     * 로컬 좌표 중 어느 쪽에 대해
     * 상대적인지 여부를 지정합니다.
     */
    relative: ValueRelativeType
    /**
     * 충격량을 적용하기 전에 DIRECTION과
     * 반대 방향인 기존의 속도를
     * 상쇄할지 여부를 지정합니다.
     */
    motion: ValueMotionType
}