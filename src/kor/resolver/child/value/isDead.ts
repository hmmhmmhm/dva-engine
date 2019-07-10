import { IIsDead } from '../../../interface'

/**
 * 플레이어의 사망 여부입니다.
 */
export const isDead = (value: IIsDead) => {
	return `Is Dead(${value['player']})`
}