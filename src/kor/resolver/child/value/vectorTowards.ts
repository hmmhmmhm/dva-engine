import { IVectorTowards } from '../../../interface'

/**
 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
 */
export const vectorTowards = (value: IVectorTowards) => {
	return `Vector Towards(${value['startPos']}, ${value['endPos']})`
}