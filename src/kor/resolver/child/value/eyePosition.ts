import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
 */
export const eyePosition = (
	player: ValuePlayerType
) => {

	return `Eye Position(${player})`
}