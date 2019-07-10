import { IIsCommunicatingAnyEmote } from '../../../interface'

/**
 * 플레이어가 감정 표현을 사용하는지 여부입니다.
 */
export const isCommunicatingAnyEmote = (value: IIsCommunicatingAnyEmote) => {
	return `Is Communicating Any Emote(${value['player']})`
}