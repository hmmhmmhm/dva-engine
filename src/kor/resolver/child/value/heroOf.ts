import { IHeroOf } from '../../../interface'

/**
 * 플레이어가 현재 사용하는 영웅입니다.
 */
export const heroOf = (value: IHeroOf) => {
	return `Hero Of(${value['player']})`
}