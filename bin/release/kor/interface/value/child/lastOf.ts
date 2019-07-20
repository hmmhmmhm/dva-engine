import { ValueArrayType } from '../../../type'

/**
 * 지정된 배열의 끝에 있는 값입니다.
 * 해당 배열이 비어있으면 결과값은 0입니다.
 */
export interface ILastOf {
    /**
     * 값을 가져올 배열입니다.
     */
    array: ValueArrayType
}