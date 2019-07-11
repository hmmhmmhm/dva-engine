import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 지정된 값의 제곱근입니다.
 */
export const squareRoot = (
	/**
	 * 제곱근을 계산할 실수값입니다.
	 * 음수의 경우 0이 됩니다.
	 */
	value: ValuePlayerType
) => {

	return `Square Root(${value})`
}