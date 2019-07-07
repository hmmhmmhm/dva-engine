import { ValueArrayType } from '../../../type'

/**
 * 지정된 배열의 값을
 * 무작위 순서로 나열한 복사본입니다.
 */
export interface IRandomizedArray {
    /**
     * 무작위 복사본을 만들 배열입니다.
     */
    array: ValueArrayType
}