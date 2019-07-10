import { IAllPlayers } from '../../../interface'

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allPlayers = (value: IAllPlayers) => {
	return `All Players(${value['team']})`
}