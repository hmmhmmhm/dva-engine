import { ISineFromRadians } from '../../../interface'

/**
 * 지정된 각(단위: RAD)의 사인 값입니다.
 */
export const sineFromRadians = (value: ISineFromRadians) => {
	return `Sine From Radians(${value['angle']})`
}