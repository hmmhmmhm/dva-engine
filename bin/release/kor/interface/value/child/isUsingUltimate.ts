import { ValuePlayerType } from '../../../type'

/**
 * 플레이어가 궁극기를 사용하는지 여부입니다.
 */
export interface IIsUsingUltimate {
    /**
     * 궁극기 사용 여부를 확인할 플레이어입니다.
     */
    player: ValuePlayerType
}