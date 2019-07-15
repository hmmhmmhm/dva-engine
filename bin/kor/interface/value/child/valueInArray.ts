import {
    ValueArrayType,
    ValueNumberType,
} from '../../../type'

/**
 * 한 배열의 지정된 요소에 있는 값입니다.
 * 대상 요소가 없는 경우 결과값은 0입니다.
 */
export interface IValueInArray {
    /**
     * 요소 정보를 가져올 대상 배열입니다.
     */
    array: ValueArrayType
    /**
     * 요소 정보를 가져올 인덱스입니다.
     */
    index: ValueNumberType
}