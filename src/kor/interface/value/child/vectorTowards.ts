import {
    ValueVectorType
} from '../../../type'

/**
 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
 */
export interface IVectorTowards {
    startPos: ValueVectorType
    endPos: ValueVectorType
}