import { 
	ValuePlayerType,
 } from '../../../interface'

/**
 * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
 */
export const isUsingAbility1 = (
	/**
	 * 기술 1의 사용 여부를 확인할 플레이어입니다.
	 */
	player: ValuePlayerType
) => {

	return `Is Using Ability 1(${player})`
}