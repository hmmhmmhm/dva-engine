import { 
	ValueVectorType,
 } from '../../../interface'

/**
 * 벡터의 단위 길이 정규화입니다.
 */
export const normalize = (
	/**
	 * 정규화할 벡터입니다.
	 */
	position: ValueVectorType
) => {

	return `Normalize(${position})`
}