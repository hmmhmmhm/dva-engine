import { ValuePlayerType } from '../../../type'

/**
 * START CAMERA 또는 한명 이상의 플레이어들의
 * 모든 이동 중인 카메라 위치를 정지시킵니다.
 */
export interface IStopCamera {
    /**
     * 카메라를 기본 뷰로 
     * 되돌릴 플레이어입니다.
     */
    player: ValuePlayerType
}