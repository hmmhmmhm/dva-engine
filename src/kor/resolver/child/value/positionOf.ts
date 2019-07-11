import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어의 현재 위치(벡터)입니다.
 */
export const positionOf = (
	/**
	 * 위치 값 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Position Of(${player})`
}