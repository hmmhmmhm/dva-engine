import { IFlagPosition } from '../../../interface'

/**
 * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
 */
export const flagPosition = (value: IFlagPosition) => {
	return `Flag Position(${value['team']})`
}