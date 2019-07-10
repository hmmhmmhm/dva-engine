import { IFirstOf } from '../../../interface'

/**
 * 지정된 배열의 맨 앞에 있는 값입니다.
 * 해당 배열이 비어 있으면 결과 값은 0 입니다.
 */
export const firstOf = (value: IFirstOf) => {
	return `First Of(${value['array']})`
}