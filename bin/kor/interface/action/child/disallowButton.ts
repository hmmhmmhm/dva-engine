import { ValuePlayerType, ValueButtonType } from '../../../type'

/**
 * 플레이어가 논리적 버튼을
 * 사용 못 하게 하여 눌러도
 * 아무 효과 없도록 합니다.
 */
export interface IDisallowButton {
    /**
     * 버튼을 사용 못 하게
     * 할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 사용할 수 없게 된
     * 논리적 버튼입니다.
     */
    button: ValueButtonType
}