import {
    ValueVectorType,
    ValuePlayerType,
} from '../../../type'

/**
 * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
 * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
 * 그 외의 경우 0이거나 음수입니다.
 */
export interface IHorizontalAngleTowards {
    /**
     * 이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.
     */
    player: ValuePlayerType
    /**
     * 각 각이 종료되는 월드 내 위치입니다.
     */
    position: ValueVectorType
}