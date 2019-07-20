import { ValueTeamType, ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * 지정된 플레이어의 조준선을 기준으로
 * 시야각 안에 있는 플레이어입니다.
 * 팀 단위로 제한할 수 있습니다.
 */
export interface IPlayersInViewAngle {
    /**
     * 시야를 확인할 플레이어입니다.
     */
    player: ValuePlayerType
    /**
     * 플레이어를 고려할 팀입니다.
     */
    team: ValueTeamType
    /**
     * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
     */
    viewAngle: ValueNumberType
}