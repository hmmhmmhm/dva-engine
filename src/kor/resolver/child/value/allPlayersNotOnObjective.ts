import { 
	ValueTeamType,
 } from '../../../interface'

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allPlayersNotOnObjective = (
	/**
	 * 플레이어가 속한 팀입니다.
	 */
	team: ValueTeamType
) => {

	return `All Players Not On Objective(${team})`
}