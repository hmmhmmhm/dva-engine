import { IScoreOf } from '../../../interface'

/**
 * 지정된 플레이어의 현재 점수입니다.
 * 게임 모드가 개별 전투가 아닌 경우
 * 결과값은 0이 됩니다.
 */
export const scoreOf = (value: IScoreOf) => {
	return `Score Of(${value['player']})`
}