import { IIsOnObjective } from '../../../interface'

/**
 * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
 */
export const isOnObjective = (value: IIsOnObjective) => {
	return `Is On Objective(${value['player']})`
}