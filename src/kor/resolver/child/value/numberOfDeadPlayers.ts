import { INumberOfDeadPlayers } from '../../../interface'

/**
 * 팀 또는 경기 내 사망 플레이어 수입니다.
 */
export const numberOfDeadPlayers = (value: INumberOfDeadPlayers) => {
	return `Number Of Dead Players(${value['team']})`
}