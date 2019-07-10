import { INumberOfEliminations } from '../../../interface'

/**
 * 지정된 플레이어가 기록한 처치 수입니다.
 * 이 값은 게임이 진행 중일 때만 누적됩니다.
 */
export const numberOfEliminations = (value: INumberOfEliminations) => {
	return `Number Of Eliminations(${value['player']})`
}