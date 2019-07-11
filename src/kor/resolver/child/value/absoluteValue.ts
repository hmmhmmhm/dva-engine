import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 지정된 값의 절대값입니다.
 */
export const absoluteValue = (
	/**
	 * 절대값을 계산할 실수값입니다.
	 */
	value: ValueNumberType
) => {

	return `Absolute Value(${value})`
}