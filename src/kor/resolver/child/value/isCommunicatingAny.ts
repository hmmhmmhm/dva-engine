import { IIsCommunicatingAny } from '../../../interface'

/**
 * 플레이어가 아무 것이든 의사소통 유형
 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
 */
export const isCommunicatingAny = (value: IIsCommunicatingAny) => {
	return `Is Communicating Any(${value['player']})`
}