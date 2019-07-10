import { IIsTrueForAll } from '../../../interface'

/**
 * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
 */
export const isTrueForAll = (value: IIsTrueForAll) => {
	return `Is True For All(${value['array']}, ${value['condition']})`
}