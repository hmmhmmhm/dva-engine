import { ValueVectorType } from '../../../type'

/**
 * 서 있을 수 있고 생성 지점에서 접근 가능하며
 * 지정된 위치에서 가장 가까운 위치입니다.
 */
export interface INearestWalkablePostion {
    /**
     * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
     */
    position: ValueVectorType
}