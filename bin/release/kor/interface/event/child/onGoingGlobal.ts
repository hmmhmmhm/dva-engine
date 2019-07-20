/**
 * 게임 시작 시 이 Rule의 개별 인스턴스 하나를 생성합니다.
 * 이 인스턴스는 게임이 지속되는 동안 활성화되어 있습니다.
 * 
 * - 이 인스턴스는 게임이 지속되는 동안 활성화되어 있으므로
 *   Condition 을 만족하거나 만족하지 않을 수 있습니다.
 *   Condition을 처음 만족할 때 Action을 실행 합니다.
 * 
 * - Condition 목록을 만족하지 못했다가 만족한다면,
 *   Action을 다시 실행하려 할 것입니다.
 */
export interface IOnGoingGlobal {}