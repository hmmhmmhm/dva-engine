import { ValueNumberType } from '../../../type'

/**
 * 모든 플레이어, 투사체,
 * 효과, 게임 모드 로직 등
 * 게임 전체를 대상으로 하여
 * 시뮬레이션 비율을 설정합니다.
 */
export interface ISetSlowMotion {
    /**
     * 정상 속도 대비
     * 시뮬레이션 비율입니다.
     * 최대 100%까지 설정 가능합니다.
     */
    speedPercent: ValueNumberType
}