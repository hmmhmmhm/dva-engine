import { IMultiply } from '../../../interface'

/**
 * 두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를
 * 곱하면 비율이 증감된 벡터가 도출됩니다.
 */
export const multiply = (value: IMultiply) => {
	return `Multiply(${value['value1']}, ${value['value2']})`
}