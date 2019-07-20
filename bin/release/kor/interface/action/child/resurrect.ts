import { ValuePlayerType } from '../../../type'

/**
 * 전환 없이 플레이어를
 * 사망한 자리에서 즉시 부활시킵니다.
 */
export interface IResurrect {
    /**
     * 부활하게 될 플레이어입니다.
     */
    player: ValuePlayerType
}