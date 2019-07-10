import { IRandomValueInArray } from '../../../interface'

/**
 * 지정된 배열의 무작위 값입니다.
 */
export const randomValueInArray = (value: IRandomValueInArray) => {
	return `Random Value In Array(${value['array']})`
}