import { IFilteredArray } from '../../../interface'

/**
 * 제거된 지정 조건에 해당하지 않는 값을 가진
 * 지정된 배열의 복사본입니다.
 */
export const filteredArray = (value: IFilteredArray) => {
	return `Filtered Array(${value['array']}, ${value['condition']})`
}