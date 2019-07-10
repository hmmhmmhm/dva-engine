import { IAppendToArray } from '../../../interface'

/**
 * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
 */
export const appendToArray = (value: IAppendToArray) => {
	return `Append To Array(${value['array']}, ${value['value']})`
}