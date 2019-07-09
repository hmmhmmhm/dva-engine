import { ValuePlayerType } from '../../../type'

/**
 * 플레이어의 생존 여부와 관계 없이,
 * 플레이어를 적절한 생성 지점에서
 * 최대 생명력으로 부활시킵니다.
 */
export interface IRespawn {
    /**
     * 부활시킬 플레이어입니다.
     */
    player: ValuePlayerType
}