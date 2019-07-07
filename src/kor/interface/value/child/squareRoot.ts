import { ValuePlayerType } from '../../../type'

/**
 * 지정된 값의 제곱근입니다.
 */
export interface ISquareRoot {
    /**
     * 제곱근을 계산할 실수값입니다.
     * 음수의 경우 0이 됩니다.
     */
    value: ValuePlayerType
}