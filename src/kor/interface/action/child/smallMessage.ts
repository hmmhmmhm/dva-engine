import { ValuePlayerType, ValueStringType } from '../../../type'

/**
 * 지정된 플레이어에게
 * 보이도록 작은 메시지를
 * 조준선 아래에 표시합니다.
 */
export interface ISmallMessage {
    /**
     * 해당 메시지를
     * 보게 될 플레이어입니다.
     */
    visibleTo: ValuePlayerType
    /**
     * 표시할 메시지입니다.
     */
    header: ValueStringType
}