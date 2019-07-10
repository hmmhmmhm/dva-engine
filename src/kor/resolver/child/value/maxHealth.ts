import { IMaxHealth } from '../../../interface'

/**
 * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
 */
export const maxHealth = (value: IMaxHealth) => {
	return `Max Health(${value['player']})`
}