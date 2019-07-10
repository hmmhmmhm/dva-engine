import { IRemoveFromArray } from '../../../interface'

/**
 * 하나 이상의 값(있는 경우)이
 * 제거된 배열의 복사본입니다.
 */
export const removeFromArray = (value: IRemoveFromArray) => {
	return `Remove From Array(${value['array']}, ${value['value']})`
}