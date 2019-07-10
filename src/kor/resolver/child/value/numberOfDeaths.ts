import { INumberOfDeaths } from '../../../interface'

/**
 * 지정된 플레이어가 기록한 사망 수입니다.
 * 이 값은 게임이 진행 중일때만 누적됩니다.
 */
export const numberOfDeaths = (value: INumberOfDeaths) => {
	return `Number Of Deaths(${value['player']})`
}