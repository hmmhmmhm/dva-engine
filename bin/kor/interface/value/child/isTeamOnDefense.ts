import { ValueTeamType } from '../../../type'

/**
 * 지정된 팀이 현재 수비 중인지 여부입니다.
 * 게임 모드가 점령, 호위,
 * 또는 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
export interface IIsTeamOnDefense {
    /**
     * 역할을 확인할 팀입니다.
     */
    team: ValueTeamType
}