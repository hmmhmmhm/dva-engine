import { ValuePlayerType, ValueStatusType, ValueNumberType } from '../../../type'
import { INull } from '../../value'

/**
 * 지정된 상태를 플레이어에게 적용합니다.
 * 이 상태는 지정된 지속 시간 동안,
 * 또는 CLEAR STATUS 액션에 의해
 * 제거될 때까지 유지됩니다.
 */
export interface ISetStatus {
    /**
     * 상태를 적용할 대상 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 이 상태가 적용된 플레이어가
     * 사망하는 경우 도움을 기록한 것으로
     * 집계될 플레이어이를 지정합니다.
     * ASSISTER가 NULL이면
     * 집계될 플레이가 없음을 의미합니다.
     */
    assister: INull | ValuePlayerType
    /**
     * 플레이어에게 적용할 상태입니다.
     * 영웅 능력에 의해 적용되는
     * 상태와 유사하게 동작합니다.
     */
    status: ValueStatusType
    /**
     * 해당 상태의 지속 시간(초)입니다.
     * 상태가 CLEAR STATUS 액션 실행에 의해
     * 중지될 때 까지 지속되게 하려면
     * 9999등 매우 긴 시간으로 설정하십시오.
     */
    duration: ValueNumberType
}