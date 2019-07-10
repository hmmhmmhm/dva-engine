import { IIsObjectiveComplete } from '../../../interface'

/**
 * 지정된 목표가 완료되었는지 여부입니다.
 * 게임 모드가 점령, 호위 또는
 * 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
export const isObjectiveComplete = (value: IIsObjectiveComplete) => {
	return `Is Objective Complete(${value['number']})`
}