import { IIsMoving } from '../../../interface'

/**
 * 플레이어가 이동하고 있는지
 * 여부(현재 속도가 0인지 여부로 판단)입니다.
 */
export const isMoving = (value: IIsMoving) => {
	return `Is Moving(${value['player']})`
}