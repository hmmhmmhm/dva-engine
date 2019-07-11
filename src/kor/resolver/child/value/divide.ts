import { 
	ValueDivideType,
 } from '../../../interface'

/**
 * 두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면
 * 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.
 */
export const divide = (
	/**
	 * 좌측 피연산자입니다. 결과값이 숫자 또는
	 * 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
	 */
	value1: ValueDivideType,
	/**
	 * 좌측 피연산자입니다. 결과값이 숫자 또는
	 * 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
	 */
	value2: ValueDivideType
) => {

	return `Divide(${value1}, ${value2})`
}