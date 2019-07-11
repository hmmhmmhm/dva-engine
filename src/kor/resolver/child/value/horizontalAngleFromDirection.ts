import { 
	ValueVectorType,
 } from '../../../interface'

/**
 * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
 */
export const horizontalAngleFromDirection = (
	/**
	 * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
	 * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
	 */
	direction: ValueVectorType
) => {

	return `Horizontal Angle From Direction(${direction})`
}