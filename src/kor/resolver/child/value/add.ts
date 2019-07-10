import { IAdd } from '../../../interface'

/**
 * 두 숫자 또는 벡터의 합입니다.
 */
export const add = (value: IAdd) => {
	return `Add(${value['value1']}, ${value['value2']})`
}