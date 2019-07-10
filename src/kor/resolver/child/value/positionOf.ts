import { IPositionOf } from '../../../interface'

/**
 * 플레이어의 현재 위치(벡터)입니다.
 */
export const positionOf = (value: IPositionOf) => {
	return `Position Of(${value['player']})`
}