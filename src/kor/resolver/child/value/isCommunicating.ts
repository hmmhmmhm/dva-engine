import { IIsCommunicating } from '../../../interface'

/**
 * 플레이어가 지정된 의사소통 유형
 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
 */
export const isCommunicating = (value: IIsCommunicating) => {
	return `Is Communicating(${value['player']}, ${value['type']})`
}