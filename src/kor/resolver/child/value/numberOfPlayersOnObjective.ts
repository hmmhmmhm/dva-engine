import { 
	ValueTeamType,
 } from '../../../interface'

/**
 * 팀 또는 경기 내에서 화물 또는
 * 거점을 확보하려는 플레이어 수입니다.
 */
export const numberOfPlayersOnObjective = (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 */
	team: ValueTeamType
) => {

	return `Number Of Players On Objective(${team})`
}