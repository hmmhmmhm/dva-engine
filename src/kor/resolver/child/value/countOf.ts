import { ICountOf } from '../../../interface'

/**
 * 지정된 배열 내 요소의 수입니다.
 */
export const countOf = (value: ICountOf) => {
	return `Count Of(${value['array']})`
}