import { ValueTeamType } from '../../../type'

/**
 * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
 * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
 */
export interface IPlayerCarryingFlag {
    /**
     * 깃발을 확인할 팀입니다.
     */
    team: ValueTeamType
}