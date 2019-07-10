import { IDistanceBetween } from '../../../interface'

/**
 * 두 위치 사이의 거리(미터)입니다.
 */
export const distanceBetween = (value: IDistanceBetween) => {
	return `Distance Between(${value['startPos']}, ${value['endPos']})`
}