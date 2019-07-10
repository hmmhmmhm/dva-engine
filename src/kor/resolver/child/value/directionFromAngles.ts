import { IDirectionFromAngles } from '../../../interface'

/**
 * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
 */
export const directionFromAngles = (value: IDirectionFromAngles) => {
	return `Direction From Angles(${value['horizontalAngle']}, ${value['verticalAngle']})`
}