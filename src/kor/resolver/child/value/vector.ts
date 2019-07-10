import { IVector } from '../../../interface'

/**
 * 3개의 실수(X, Y, Z)로 이루어진 벡터입니다.
 * X는 좌측, Y는 위, Z는 전방을 의미합니다.
 * 벡터는 위치, 방향, 속도로 사용됩니다.
 */
export const vector = (value: IVector) => {
	return `Vector(${value['x']}, ${value['y']}, ${value['z']})`
}