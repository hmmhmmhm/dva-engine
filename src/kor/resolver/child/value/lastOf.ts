import { ILastOf } from '../../../interface'

/**
 * 지정된 배열의 끝에 있는 값입니다.
 * 해당 배열이 비어있으면 결과값은 0입니다.
 */
export const lastOf = (value: ILastOf) => {
	return `Last Of(${value['array']})`
}