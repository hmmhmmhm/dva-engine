import {
    ValuePlayerType,
    ValueHeroType,
} from '../../../type'

/**
 * 플레이어가 사용할 수 있는
 * 영웅 목록을 설정합니다.
 * 플레이어의 현재 영웅을
 * 더 이상 사용할 수 없게 되면
 * 플레이어는 강제로
 * 다른 영웅을 선택하여
 * 적절한 생성 지점에서 부활합니다.
 */
export interface ISetPlayerAllowedHeroes {
    /**
     * 영웅 목록을 설정할
     * 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 사용할 수 있는 영웅입니다.
     * 제공된 영웅이 없는 경우
     * 이 액션은 아무 효과가 없습니다.
     */
    hero: ValueHeroType
}