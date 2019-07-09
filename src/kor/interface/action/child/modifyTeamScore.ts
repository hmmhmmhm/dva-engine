import { ValueTeamType, ValueNumberType } from '../../../type'

/**
 * 한 팀 또는 두 팀 모두의 점수를 수정합니다.
 * 이 액션은 개별 전투 모드나 팀 점수가
 * 존재하지 않는 모드에서는 효과가 없습니다.
 */
export interface IModifyTeamScore {
    /**
     * 점수를 변경할 팀입니다.
     */
    team: ValueTeamType
    /**
     * 점수 증감량입니다.
     * 양수인 경우 점수가 오르고
     * 음수인 경우 감소합니다.
     */
    score: ValueNumberType
}