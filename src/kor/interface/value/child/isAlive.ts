import { ValuePlayerType } from '../../../type'

/**
 * 플레이어의 생존 여부 입니다.
 */
export interface IIsAlive {
    /**
     * 생존 여부를 확인할 플레이어입니다.
     */
    player: ValuePlayerType
}