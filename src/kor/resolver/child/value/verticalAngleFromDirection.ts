import { 
	ValueVectorType,
 } from '../../../interface'

/**
 * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
 */
export const verticalAngleFromDirection = (
	/**
	 * 종축각(단위: 도) 정보를
	 * 가져올 방향 벡터입니다.
	 * 벡터는 연산 전에 정규화됩니다.
	 */
	direction: ValueVectorType
) => {

	return `Vertical Angle From Direction(${direction})`
}