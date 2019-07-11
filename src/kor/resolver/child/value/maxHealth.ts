import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
 */
export const maxHealth = (
	/**
	 * 최대 생명력 정보를 가져올 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Max Health(${player})`
}