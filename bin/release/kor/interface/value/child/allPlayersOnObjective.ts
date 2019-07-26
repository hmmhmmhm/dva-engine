import { ValueTeamType } from '../../../type'

/**
 * 팀 또는 경기 내에서 화물 확보 또는
 * 점령 중인 모든 플레이어가 있는 배열입니다.
 */
export interface IAllPlayersOnObjective {
    /**
     * 플레이어가 속한 팀입니다.
     */
    team: ValueTeamType
}