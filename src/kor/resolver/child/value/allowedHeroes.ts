import { IAllowedHeroes } from '../../../interface'

/**
 * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
 */
export const allowedHeroes = (value: IAllowedHeroes) => {
	return `Allowed Heroes(${value['player']})`
}