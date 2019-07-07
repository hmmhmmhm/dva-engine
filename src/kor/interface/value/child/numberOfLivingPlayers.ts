import {
    ValueTeamType
} from '../../../type'

/**
 * 팀 또는 경기에서 생존한 플레이어의 수입니다.
 */
export interface INumberOfLivingPlayers {
    /**
     * 플레이어 수를 확인할 팀입니다.
     */
    team: ValueTeamType
}