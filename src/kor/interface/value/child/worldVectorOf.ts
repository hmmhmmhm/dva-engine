import {
    ValueVectorType,
    ValuePlayerType,
    ValueTransformationType
} from '../../../type'

/**
 * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
 */
export interface IWorldVectorOf {
    /**
     * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
     */
    localVector: ValueVectorType

    /**
     * 결과 벡터와 연관될 플레이어입니다.
     */
    relativePlayer: ValuePlayerType

    /**
     * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
     * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
     */
    transformation: ValueTransformationType
}