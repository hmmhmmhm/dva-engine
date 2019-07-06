import {
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
 */
export interface IIsTrueForAll {
    /**
     * 값을 확인할 배열입니다.
     */
    array: ValueArrayType

    /**
     * 지정된 배열의 각 요소에 대해 확인할 조건입니다.
     * 현재 확인 대상인 배열의 요소를 참조할 때는
     * CURRENT ARRAY ELEMENT 값을 사용하십시오.
     */
    condition: ValueBoolType
}