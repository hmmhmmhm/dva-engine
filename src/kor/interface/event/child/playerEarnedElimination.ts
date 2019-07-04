/**
 * 플레이어 한 명이 처치를 달성할 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어 한 명이 누군가를 처치하면 Condition을 확인합니다.
 *   모든 Condition을 만족하면 Action이 실행되지만, 
 *   하나라도 만족하지 않으면 실행되지 않습니다.
 */
export interface IPlayerEarnedElimination {

}