import { ValueTeamType } from '../../../type'

/**
 * 팀 또는 경기 내에서 화물을 확보하지도,
 * 점령 중이지도 않은 모든 플레이어가 있는 배열입니다.
 */
export interface IAllPlayersNotOnObjective {
    /**
     * 플레이어가 속한 팀입니다.
     */
    team: ValueTeamType
}