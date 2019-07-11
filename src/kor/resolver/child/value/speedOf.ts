import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어의 현재 속도(초당 미터)입니다.
 */
export const speedOf = (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Speed Of(${player})`
}