import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * 플레이어를 즉시 치유합니다.
 * 이 기능으로 죽은 플레이어가
 * 부활하지는 않습니다.
 */
export interface IHeal {
    /**
     * 생명력을 회복할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 치유 행동을 한 것으로
     * 집계될 플레이어입니다.
     * HEALER가 NULL이면
     * 집계될 플레이어가
     * 없음을 의미합니다.
     */
    healer: ValueAssisterParamType
    /**
     * 적용할 치유량입니다.
     * 이 치유량은 강화 효과,
     * 약화 효과 등에 의해
     * 달라질 수 있습니다.
     * 치유량 최대치는
     * 각 플레이어의
     * 최대 생명력입니다.
     */
    amount: ValueNumberType
}