import { ValueVectorType } from '../../../type'

/**
 * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
 */
export interface IDirectionTowards {
    /**
     * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
     */
    startPos: ValueVectorType

    /**
     * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
     */
    endPos: ValueVectorType
}