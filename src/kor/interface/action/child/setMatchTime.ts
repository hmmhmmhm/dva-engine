import { ValueNumberType } from '../../../type'

/**
 * (화면 상단에 표시되는)
 * 현재 경기 시간을 설정합니다.
 * 이를 통해 경기 지속시간을
 * 조정하거나 영웅 선택 또는
 * 준비 시간을 변경할 수 있습니다.
 */
export interface ISetMatchTime {
    /**
     * 경기 시간(초)입니다.
     */
    time: ValueNumberType
}