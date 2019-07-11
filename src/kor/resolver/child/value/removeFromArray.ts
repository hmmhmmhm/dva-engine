import { 
	ValueArrayType,
	ValueType,
 } from '../../../interface'

/**
 * 하나 이상의 값(있는 경우)이
 * 제거된 배열의 복사본입니다.
 */
export const removeFromArray = (
	/**
	 * 값을 제거할 배열입니다.
	 */
	array: ValueArrayType,
	/**
	 * 배열에서 제거할 값(있는 경우)입니다.
	 * 이 값 자체가 배열인 경우
	 * 일치하는 각 요소가 제거됩니다.
	 */
	value: ValueType
) => {

	return `Remove From Array(${array}, ${value})`
}