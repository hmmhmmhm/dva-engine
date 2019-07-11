import { 
	ValueVectorType,
 } from '../../../interface'

/**
 * 지정된 벡터의 Z 구성요소입니다.
 * 일반적으로 왼쪽 방향의 벡터량입니다.
 */
export const zComponentOf = (
	/**
	 * Z 구성요소 정보를 가져올 벡터입니다.
	 */
	value: ValueVectorType
) => {

	return `Z Component Of(${value})`
}