import { ISortedArray } from '../../../interface'

/**
 * 지정된 배열의 각 요소를
 * VALUE RANK에 따라 평가하고
 * 정렬해서 만든 새 배열 복사본입니다.
 */
export const sortedArray = (value: ISortedArray) => {
	return `Sorted Array(${value['array']}, ${value['valueRank']})`
}