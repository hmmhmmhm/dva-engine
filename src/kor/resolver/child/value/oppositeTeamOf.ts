import { IOppositeTeamOf } from '../../../interface'

/**
 * 지정된 팀의 상대 팀입니다.
 */
export const oppositeTeamOf = (value: IOppositeTeamOf) => {
	return `Opposite Team Of(${value['team']})`
}