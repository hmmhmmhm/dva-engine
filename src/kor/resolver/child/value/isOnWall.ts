import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
 */
export const isOnWall = (
	/**
	 * 벽 상태를 확인할 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Is On Wall(${player})`
}