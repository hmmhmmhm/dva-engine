import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어의 궁극기
 * 활성화 여부를 설정합니다.
 */
export interface ISetUltimateCharge {
    /**
     * 궁극기 사용에 있어
     * 영향을 받는 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 최대 충전량 비율입니다.
     */
    chargePercent: ValueNumberType
}