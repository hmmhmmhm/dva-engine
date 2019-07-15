/**
 * 조건 목록의 조건이 하나라도 TRUE인 경우
 * 액션 목록을 처음부터 다시 시작합니다.
 * 모두 FALSE인 경우 다음 액션을 진행합니다.
 * 무한 반복을 방지하려면 액션 목록의 시작과
 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
 */
export interface ILoopIfConditionIsTrue {}