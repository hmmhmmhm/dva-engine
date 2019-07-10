import { ISineFromDegrees } from '../../../interface'

/**
 * 지정된 각(단위: 도)의 사인 값입니다.
 */
export const sineFromDegrees = (value: ISineFromDegrees) => {
	return `Sine From Degrees(${value['angle']})`
}