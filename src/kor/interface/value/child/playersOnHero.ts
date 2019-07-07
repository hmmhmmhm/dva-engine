import { ValueTeamType, ValueHeroType } from '../../../type'

/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어가 있는 배열입니다.
 */
export interface IPlayersOnHero {
    /**
     * 플레이 현황을 확인할 영웅입니다.
     */
    hero: ValueHeroType
    /**
     * 영웅 플레이 현황을 확인할 팀입니다.
     */
    team: ValueTeamType
}