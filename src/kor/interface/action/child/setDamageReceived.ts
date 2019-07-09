import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어가 받는 피해를
 * 순수 피해량 대비
 * % 비율로 설정합니다.
 */
export interface ISetDamageReceived {
    /**
     * 받는 피해량을 설정할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 순수 피해량에 비례하도록
     * 설정할 플레이어의
     * 받는 피해량 비율입니다.
     */
    damageReceivedPercent: ValueNumberType
}