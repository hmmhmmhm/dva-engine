import { ICosineFromRadians } from '../../../interface'

/**
 * 지정된 각(단위: RAD)의 코사인 값입니다.
 */
export const cosineFromRadians = (value: ICosineFromRadians) => {
	return `Cosine From Radians(${value['angle']})`
}