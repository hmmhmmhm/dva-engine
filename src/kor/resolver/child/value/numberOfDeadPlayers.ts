import { 
	ValueTeamType,
 } from '../../../interface'

/**
 * 팀 또는 경기 내 사망 플레이어 수입니다.
 */
export const numberOfDeadPlayers = (
	/**
	 * 플레이어 수를 확인할 팀입니다.
	 */
	team: ValueTeamType
) => {

	return `Number Of Dead Players(${team})`
}