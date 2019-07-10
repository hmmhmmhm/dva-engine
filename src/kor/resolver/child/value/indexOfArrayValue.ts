import { IIndexOfArrayValue } from '../../../interface'

/**
 * 배열 내에 있는 값의 인덱스입니다.
 * 해당 값을 찾을 수 없는 경우 -1입니다.
 */
export const indexOfArrayValue = (value: IIndexOfArrayValue) => {
	return `Index Of Array Value(${value['array']}, ${value['value']})`
}