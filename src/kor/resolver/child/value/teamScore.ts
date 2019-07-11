import { 
	ValueTeamType,
 } from '../../../interface'

/**
 * 지정된 팀의 현재 점수입니다.
 * 개별 전투 모드에서는 결과값이 0입니다.
 */
export const teamScore = (
	/**
	 * 점수 정보를 가져올 팀입니다.
	 */
	team: ValueTeamType
) => {

	return `Team Score(${team})`
}