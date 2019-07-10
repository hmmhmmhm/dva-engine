import { IControlModeScoringPercentage } from '../../../interface'

/**
 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
 */
export const controlModeScoringPercentage = (value: IControlModeScoringPercentage) => {
	return `Control Mode Scoring Percentage(${value['team']})`
}