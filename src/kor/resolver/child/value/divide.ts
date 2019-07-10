import { IDivide } from '../../../interface'

/**
 * 두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면
 * 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.
 */
export const divide = (value: IDivide) => {
	return `Divide(${value['value1']}, ${value['value2']})`
}