import { ValuePlayerType, ValueInvisibleToType } from '../../../type'

/**
 * 플레이어를 다른
 * 모든 플레이어 또는
 * 적에게만 보이지 않게 합니다.
 */
export interface ISetInvisible {
    /**
     * 보이지 않게 될
     * 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어가 보이지 않게 할
     * 플레이어를 지정합니다.
     */
    invisibleTo: ValueInvisibleToType
}