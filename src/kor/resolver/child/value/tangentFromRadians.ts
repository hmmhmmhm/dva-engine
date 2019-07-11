import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 지정된 각(단위: RAD)의 탄젠트 값입니다.
 */
export const tangentFromRadians = (
	/**
	 * 각(단위: RAD)입니다.
	 */
	angle: ValueNumberType
) => {

	return `Tangent From Radians(${angle})`
}