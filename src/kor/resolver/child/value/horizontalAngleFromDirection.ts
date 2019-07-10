import { IHorizontalAngleFromDirection } from '../../../interface'

/**
 * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
 */
export const horizontalAngleFromDirection = (value: IHorizontalAngleFromDirection) => {
	return `Horizontal Angle From Direction(${value['direction']})`
}