import { IValueInArray } from '../../../interface'

/**
 * 한 배열의 지정된 요소에 있는 값입니다.
 * 대상 요소가 없는 경우 결과값은 0입니다.
 */
export const valueInArray = (value: IValueInArray) => {
	return `Value In Array(${value['array']}, ${value['index']})`
}