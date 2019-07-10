import { INumberOfLivingPlayers } from '../../../interface'

/**
 * 팀 또는 경기에서 생존한 플레이어의 수입니다.
 */
export const numberOfLivingPlayers = (value: INumberOfLivingPlayers) => {
	return `Number Of Living Players(${value['team']})`
}