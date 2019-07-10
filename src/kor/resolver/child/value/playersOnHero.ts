import { IPlayersOnHero } from '../../../interface'

/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어가 있는 배열입니다.
 */
export const playersOnHero = (value: IPlayersOnHero) => {
	return `Players On Hero(${value['hero']}, ${value['team']})`
}