import { IIsHeroBeingPlayed } from '../../../interface'

/**
 * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
 */
export const isHeroBeingPlayed = (value: IIsHeroBeingPlayed) => {
	return `Is Hero Being Played(${value['hero']}, ${value['team']})`
}