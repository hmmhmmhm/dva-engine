import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
 */
export const isOnGround = (
	/**
	 * 착지 상태를 확인할 대상 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Is On Ground(${player})`
}