import { ITeam } from './'

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export interface IAllPlayersNotOnObjective {
    /**
     * 플레이어가 속한 팀입니다.
     */
    team: ITeam
}