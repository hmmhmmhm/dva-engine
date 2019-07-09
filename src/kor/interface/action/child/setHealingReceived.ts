import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어가 받는 치유량을
 * 순수 치유량 대비
 * % 비율로 설정합니다.
 */
export interface ISetHealingReceived {
    /**
     * 받는 치유량을 설정할
     * 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 받는 순수 치유량에
     * 비례하도록 설정할
     * 플레이어의 받는
     * 치유량 비율입니다.
     */
    healingReceivedPercent: ValueNumberType
}