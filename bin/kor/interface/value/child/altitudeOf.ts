import { ValuePlayerType } from '../../../type'

/**
 * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
 * 플레이어가 표면에 있으면 0입니다.
 */
export interface IAltitudeOf {
    /**
     * 고도 정보를 가져올 플레이어입니다.
     */
    player: ValuePlayerType
}