import { IRandomizedArray } from '../../../interface'

/**
 * 지정된 배열의 값을
 * 무작위 순서로 나열한 복사본입니다.
 */
export const randomizedArray = (value: IRandomizedArray) => {
	return `Randomized Array(${value['array']})`
}