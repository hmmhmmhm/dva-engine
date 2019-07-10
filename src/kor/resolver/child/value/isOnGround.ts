import { IIsOnGround } from '../../../interface'

/**
 * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
 */
export const isOnGround = (value: IIsOnGround) => {
	return `Is On Ground(${value['player']})`
}