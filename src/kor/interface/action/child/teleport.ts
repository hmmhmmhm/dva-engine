import { ValuePlayerType, ValueVectorType } from '../../../type'

/**
 * 플레이어를 지정 위치로
 * 순간이동시킵니다.
 */
export interface ITeleport {
    /**
     * 순간이동할
     * 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어가 순간이동하게 될 위치입니다.
     * 플레이어가 설정되어 있으면
     * 해당 플레이어의 위치가 사용됩니다.
     */
    position: ValueVectorType
}