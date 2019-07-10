import { INumberOfPlayersOnObjective } from '../../../interface'

/**
 * 팀 또는 경기 내에서 화물 또는
 * 거점을 확보하려는 플레이어 수입니다.
 */
export const numberOfPlayersOnObjective = (value: INumberOfPlayersOnObjective) => {
	return `Number Of Players On Objective(${value['team']})`
}