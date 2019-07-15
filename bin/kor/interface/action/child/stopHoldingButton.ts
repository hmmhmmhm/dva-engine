import { ValuePlayerType, ValueButtonType } from '../../../type'

/**
 * 플레이어를 대상으로 한
 * START HOLDING BUTTON
 * 액션의 효과를 취소합니다.
 */
export interface IStopHoldingButton {
    /**
     * 더 이상 가상으로 버튼을
     * 누르지 않을 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 더 이상 가상으로
     * 눌리지 않을
     * 논리적 버튼입니다.
     */
    button: ValueButtonType
}