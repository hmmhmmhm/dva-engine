import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 해당 플레이어의 소속 팀입니다.
 * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
 */
export const teamOf = (
	/**
	 * 팀 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Team Of(${player})`
}