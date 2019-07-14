import {
    TeamConstantType,
    EventPlayerType
} from '../../../type'

/**
 * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
 *   모든 Condition을 만족하면Action이 실행되지만,
 *   하나라도 만족하지 않으면 실행되지 않습니다.
 */
export interface IPlayerTookDamage {
    team: TeamConstantType
    player: EventPlayerType
}