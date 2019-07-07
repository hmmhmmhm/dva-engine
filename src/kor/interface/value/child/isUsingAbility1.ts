import { ValuePlayerType } from '../../../type'

/**
 * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
 */
export interface IIsUsingAbility1 {
    /**
     * 기술 1의 사용 여부를 확인할 플레이어입니다.
     */
    player: ValuePlayerType
}