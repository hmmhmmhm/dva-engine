import {
    ValueTeamType
} from '../../../type'

/**
 * 깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.
 */
export interface IIsFlagAtBase {
    /**
     * 깃발을 확인할 팀입니다.
     */
    team: ValueTeamType
}