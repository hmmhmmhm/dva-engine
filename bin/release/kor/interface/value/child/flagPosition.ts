import {
    ValueTeamType
} from '../../../type'

/**
 * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
 */
export interface IFlagPosition {
    /**
     * 깃발 위치 정보를 가져올 팀입니다.
     */
    team: ValueTeamType
}