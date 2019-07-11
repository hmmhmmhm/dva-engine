import { 
	ValueArrayType,
	ValueBoolType,
 } from '../../../interface'

/**
 * 제거된 지정 조건에 해당하지 않는 값을 가진
 * 지정된 배열의 복사본입니다.
 */
export const filteredArray = (
	array: ValueArrayType,
	condition: ValueBoolType
) => {

	return `Filtered Array(${array}, ${condition})`
}