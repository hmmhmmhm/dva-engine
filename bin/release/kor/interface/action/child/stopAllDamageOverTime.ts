import { ValuePlayerType } from '../../../type'

/**
 * 플레이어를 대상으로
 * START DAMAGE OVER TIME
 * 액션에 의해 시작된 모든
 * DAMAGE OVER TIME을 중지합니다.
 */
export interface IStopAllDamageOverTime {
    /**
     * 스크립트에 의한
     * DAMAGE OVER TIME이
     * 중지되는 플레이어입니다.
     */
    player: ValuePlayerType
}