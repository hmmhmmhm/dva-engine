import { ValuePlayerType, ValueStatusType } from '../../../type'

/**
 * SET STATUS 액션을 통해
 * 플레이어에게 적용된
 * 상태 하나를 제거합니다.
 */
export interface IClearStatus {
    /**
     * 상태를 제거할 대상 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어에게서 제거할 상태입니다.
     */
    status: ValueStatusType
}