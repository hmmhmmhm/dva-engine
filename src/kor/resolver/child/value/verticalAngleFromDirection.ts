import { IVerticalAngleFromDirection } from '../../../interface'

/**
 * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
 */
export const verticalAngleFromDirection = (value: IVerticalAngleFromDirection) => {
	return `Vertical Angle From Direction(${value['direction']})`
}