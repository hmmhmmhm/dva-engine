import { ValueTeamType, ValueNumberType } from '../../../type'

/**
 * 한 팀 또는 두 팀
 * 모두의 점수를 설정합니다.
 * 이 액션은 개별
 * 전투 모드나 팀 점수가
 * 존재하지 않는
 * 모드에서는 효과가 없습니다.
 */
export interface ISetTeamScore {
    /**
     * 점수를 설정할 팀입니다.
     */
    team: ValueTeamType
    /**
     * 설정할 점수입니다.
     */
    score: ValueNumberType
}