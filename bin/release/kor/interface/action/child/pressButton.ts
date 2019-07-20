import { ValuePlayerType, ValueButtonType } from '../../../type'

/**
 * 플레이어에 대해
 * 한 프레임 동안
 * 가상으로 버튼 하나를
 * 누르도록 강제합니다.
 */
export interface IPressButton {
    /**
     * 가상 버튼 입력을
     * 강제할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 누를 버튼입니다.
     */
    button: ValueButtonType
}