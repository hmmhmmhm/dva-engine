import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 지정된 플레이어가 기록한 결정타 개수입니다.
 * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
 */
export const numberOfFinalBlows = (
	/**
	 * 결정타 개수 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Number Of Final Blows(${player})`
}