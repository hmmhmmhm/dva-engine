import {
    ValueVectorType
} from '../../../type'

/**
 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
 */
export interface IVectorTowards {
    /**
     * 변위 벡터가 시작하는 위치입니다.
     */
    startPos: ValueVectorType
    /**
     * 변위 벡터가 종료되는 위치입니다.
     */
    endPos: ValueVectorType
}