import {
    ValueArrayType,
    ValueType
} from '../../../type'

/**
 * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
 */
export interface IAppendToArray {
    /**
     * 덧붙일 대상 배열입니다.
     */
    array: ValueArrayType

    /**
     * 배열 후미에 덧붙일 값입니다.
     * 이 값 자체가 배열인 경우 각 요소를 덧붙입니다.
     */
    value: ValueType
}