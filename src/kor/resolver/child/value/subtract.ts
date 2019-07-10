import { ISubstract } from '../../../interface'

/**
 * 두 숫자 또는 벡터의 차이입니다.
 */
export const subtract = (value: ISubstract) => {
	return `Substract(${value['value1']}, ${value['value2']})`
}