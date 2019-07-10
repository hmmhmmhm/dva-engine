import { ICosineFromDegrees } from '../../../interface'

/**
 * 지정된 각(단위: 도)의 코사인 값입니다.
 */
export const cosineFromDegrees = (value: ICosineFromDegrees) => {
	return `Cosine From Degrees(${value['angle']})`
}