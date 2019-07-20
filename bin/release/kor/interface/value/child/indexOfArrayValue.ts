import {
    ValueArrayType,
    ValueType
} from '../../../type'

/**
 * 배열 내에 있는 값의 인덱스입니다.
 * 해당 값을 찾을 수 없는 경우 -1입니다.
 */
export interface IIndexOfArrayValue {
    /**
     * 지정된 값을 검색할 배열입니다.
     */
    array: ValueArrayType
    /**
     * 검색할 값입니다.
     */
    value: ValueType
}