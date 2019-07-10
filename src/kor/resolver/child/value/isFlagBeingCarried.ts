import { IIsFlagBeingCarried } from '../../../interface'

/**
 * 깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.
 */
export const isFlagBeingCarried = (value: IIsFlagBeingCarried) => {
	return `Is Flag Being Carried(${value['team']})`
}