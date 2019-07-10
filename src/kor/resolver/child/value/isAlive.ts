import { IIsAlive } from '../../../interface'

/**
 * 플레이어의 생존 여부 입니다.
 */
export const isAlive = (value: IIsAlive) => {
	return `Is Alive(${value['player']})`
}