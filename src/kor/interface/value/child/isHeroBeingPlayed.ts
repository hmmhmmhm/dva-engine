import {
    ValueHeroType,
    ValueTeamType,
} from '../../../type'

/**
 * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
 */
export interface IIsHeroBeingPlayed {
    /**
     * 플레이 현황을 확인할 영웅입니다.
     */
    hero: ValueHeroType
    /**
     * 영웅 플레이 현황을 확인할 팀입니다.
     */
    team: ValueTeamType
}