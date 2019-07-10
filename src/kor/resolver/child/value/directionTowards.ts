import { IDirectionTowards } from '../../../interface'

/**
 * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
 */
export const directionTowards = (value: IDirectionTowards) => {
	return `Direction Towards(${value['startPos']}, ${value['endPos']})`
}