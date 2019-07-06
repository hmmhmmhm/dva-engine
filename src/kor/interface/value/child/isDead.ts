import {
    ValuePlayerType
} from '../../../type'

/**
 * 플레이어의 사망 여부입니다.
 */
export interface IIsDead {
    /**
     * 사망 여부를 확인할 플레이어입니다.
     */
    player: ValuePlayerType
}