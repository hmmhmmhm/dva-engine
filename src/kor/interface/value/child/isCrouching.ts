import {
    ValuePlayerType
} from '../../../type'

/**
 * 플레이어가 웅크리고 있는 상태인지 여부입니다.
 */
export interface IIsCrouching {
    /**
     * 웅크린 상태를 확인할 대상 플레이어입니다.
     */
    player: ValuePlayerType
}