import { ValueType, ValueOperatorType } from '../../../type'

/**
 * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
 */
export interface ICompare {
    /**
     * 비교 연산의 좌측단입니다.
     * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
     * 그 이외에는 실수 형식이어야 합니다.
     */
    value1: ValueType

    operator: ValueOperatorType

    /**
     * 비교 연산의 우측단입니다.
     * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
     * 그 이외에는 실수 형식이어야 합니다.
     */
    value2: ValueType
}