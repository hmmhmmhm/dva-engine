import { IIsCrouching } from '../../../interface'

/**
 * 플레이어가 웅크리고 있는 상태인지 여부입니다.
 */
export const isCrouching = (value: IIsCrouching) => {
	return `Is Crouching(${value['player']})`
}