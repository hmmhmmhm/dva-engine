import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType
} from '../../../type'

/**
 * LOCATION이 플레이어의 시야에 있는지 여부입니다.
 */
export interface IIsInViewAngle {
    /**
     * 시야를 확인할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 시야에 있는지 테스트할 LOCATION입니다.
     */
    location: ValueVectorType
    /**
     * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
     */
    viewAngle: ValueNumberType
}