import { INumberOfHeroes } from '../../../interface'

/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어의 수입니다.
 */
export const numberOfHeroes = (value: INumberOfHeroes) => {
	return `Number Of Heroes(${value['hero']}, ${value['team']})`
}