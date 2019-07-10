import { IHero } from '../../../interface'

/**
 * 영웅 상수입니다.
 */
export const hero = (value: IHero) => {
	return `Hero(${value['hero']})`
}