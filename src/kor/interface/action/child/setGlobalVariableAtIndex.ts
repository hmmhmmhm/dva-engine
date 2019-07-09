import {
    ValueType,
    VariableType,
    ValueNumberType
} from '../../../type'

/**
 * 게임 자체에 종속된 전역 변수의
 * 배열을 찾거나 생성한 후,
 * 값 하나를 배열의
 * 특정 인덱스에 저장합니다.
 */
export interface ISetGlobalVariableAtIndex {
    /**
     * 어떤 전연 변수 값이
     * 수정할 배열인지를 지정합니다.
     * 변수값이 배열이 아닌 경우,
     * 해당 값은 빈 배열이 됩니다.
     */
    variable: VariableType
    /**
     * 수정할 배열의 인덱스입니다.
     * 인덱스가 배열의 끝을 벗어난 경우,
     * 해당 배열이 확장되며
     * 새 요소는 0의 값을 가집니다.
     */
    index: ValueNumberType
    /**
     * ARRAY에 저장할 값입니다.
     */
    value: ValueType
}