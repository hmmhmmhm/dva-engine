import { ITeamOf } from '../../../interface'

/**
 * 해당 플레이어의 소속 팀입니다.
 * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
 */
export const teamOf = (value: ITeamOf) => {
	return `Team Of(${value['player']})`
}