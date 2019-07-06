import { ValueVectorType } from '../../../type'

/**
 * 지정된 값의 점곱입니다.
 */
export interface IDotProduct {
    /**
     * 점곱의 백터 피연산자 두 개 중 하나입니다.
     */
    value1: ValueVectorType

    /**
     * 점곱의 백터 피연산자 두 개 중 하나입니다.
     */
    value2: ValueVectorType
}