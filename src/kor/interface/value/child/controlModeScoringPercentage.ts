import { ITeam } from './'

/**
 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
 */
export interface IControlModeScoringPercentage {

    /**
     * 점수 비율 정보를 가져올 팀입니다.
     */
    team: ITeam
}