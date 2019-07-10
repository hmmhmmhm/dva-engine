import { IObjectivePosition } from '../../../interface'

/**
 * 지정된 목표가 있는 월드 내의
 * 위치(거점, 화물 경유지, 화물 목적지) 입니다.
 * 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
 */
export const objectivePosition = (value: IObjectivePosition) => {
	return `Objective Position(${value['number']})`
}