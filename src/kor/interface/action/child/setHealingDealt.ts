import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 플레이어가 주는 치유량을
 * 순수 치유량 대비
 * % 비율로 설정합니다.
 */
export interface ISetHealingDealt {
    /**
     * 이동 중력을 설정할
     * 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 일반 이동 중력에 비례하도록
     * 설정할 플레이어의
     * 개인 이동 중력 비율입니다.
     */
    healingDealtPercent: ValueNumberType
}