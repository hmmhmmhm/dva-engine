import {
    ValueArrayType,
    ValueType
} from '../../../type'

/**
 * 지정된 배열에 지정된 값이 있는지 여부입니다.
 */
export interface IArrayContains {
    /**
     * 지정된 값을 검색할 배열입니다.
     */
    array: ValueArrayType

    /**
     * 검색할 값입니다.
     */
    value: ValueType
}