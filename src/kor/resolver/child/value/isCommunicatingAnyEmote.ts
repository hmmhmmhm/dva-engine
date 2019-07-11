import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어가 감정 표현을 사용하는지 여부입니다.
 */
export const isCommunicatingAnyEmote = (
	/**
	 * 감정표현 상태를 확인할 대상 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Is Communicating Any Emote(${player})`
}