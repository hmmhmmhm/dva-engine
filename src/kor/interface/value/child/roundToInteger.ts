import {
    ValueNumberType,
    ValueRoundingType,
} from '../../../type'

/**
 * 지정된 값을 반올림할 대상 정수입니다.
 */
export interface IRoundToInteger {
    /**
     * 반올림할 실수입니다.
     */
    value: ValueNumberType
    /**
     * 값을 반올림하는 규칙을 결정합니다.
     */
    roundingType: ValueRoundingType
}