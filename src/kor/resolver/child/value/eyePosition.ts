import { IEyePosition } from '../../../interface'

/**
 * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
 */
export const eyePosition = (value: IEyePosition) => {
	return `Eye Position(${value['player']})`
}