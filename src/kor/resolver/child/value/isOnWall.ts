import { IIsOnWall } from '../../../interface'

/**
 * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
 */
export const isOnWall = (value: IIsOnWall) => {
	return `Is On Wall(${value['player']})`
}