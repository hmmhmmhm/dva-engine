import { INumberOfPlayers } from '../../../interface'

/**
 * 팀 또는 경기 내 존재하는 플레이어 수입니다.
 */
export const numberOfPlayers = (value: INumberOfPlayers) => {
	return `Number Of Players(${value['team']})`
}