import { 
	ValueNumberType,
	ValueRoundingType,
 } from '../../../interface'

/**
 * 지정된 값을 반올림할 대상 정수입니다.
 */
export const roundToInteger = (
	/**
	 * 반올림할 실수입니다.
	 */
	value: ValueNumberType,
	/**
	 * 값을 반올림하는 규칙을 결정합니다.
	 */
	roundingType: ValueRoundingType
) => {

	return `Round To Integer(${value}, ${roundingType})`
}