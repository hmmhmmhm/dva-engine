import { IArrayContains } from '../../../interface'

/**
 * 지정된 배열에 지정된 값이 있는지 여부입니다.
 */
export const arrayContains = (value: IArrayContains) => {
	return `Array Contains(${value['array']}, ${value['value']})`
}