import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 지정된 각(단위: 도)의 사인 값입니다.
 */
export const sineFromDegrees = (
	/**
	 * 각(단위: 도)입니다.
	 */
	angle: ValueNumberType
) => {

	return `Sine From Degrees(${angle})`
}