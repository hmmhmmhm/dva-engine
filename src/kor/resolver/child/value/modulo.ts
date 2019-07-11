import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 좌측 피연산자를 우측 피연산자로 나눈 나머지입니다.
 * 어떤 숫자이든 MODULO 0의 결과는 0입니다.
 */
export const modulo = (
	value1: ValueNumberType,
	value2: ValueNumberType
) => {

	return `Modulo(${value1}, ${value2})`
}