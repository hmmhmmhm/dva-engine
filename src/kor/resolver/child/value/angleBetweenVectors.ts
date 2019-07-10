import { IAngleBetweenVectors } from '../../../interface'

/**
 * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
 */
export const angleBetweenVectors = (value: IAngleBetweenVectors) => {
	return `Angle Between Vectors(${value['vector1']}, ${value['vector2']})`
}