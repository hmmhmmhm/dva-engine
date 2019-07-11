import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 지정된 플레이어가 기록한 사망 수입니다.
 * 이 값은 게임이 진행 중일때만 누적됩니다.
 */
export const numberOfDeaths = (
	/**
	 * 사망 횟수 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Number Of Deaths(${player})`
}