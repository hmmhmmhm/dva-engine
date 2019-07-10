import { IHealth } from '../../../interface'

/**
 * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
 */
export const health = (value: IHealth) => {
	return `Health(${value['player']})`
}