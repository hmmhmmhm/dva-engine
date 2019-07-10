import { IArraySlice } from '../../../interface'

/**
 * 지정된 범위 인덱스의 값만을
 * 포함하고 있는 지정된 배열의 복사본입니다.
 */
export const arraySlice = (value: IArraySlice) => {
	return `Array Slice(${value['array']}, ${value['index']}, ${value['count']})`
}