import { IIsInAir } from '../../../interface'

/**
 * 플레이어가 공중에 있는 상태인지 여부입니다.
 */
export const isInAir = (value: IIsInAir) => {
	return `Is In Air(${value['player']})`
}