/**
 * Applies instantaneous damage to one or more
 * players, possibly killing the players.
 */
export const damage = (
	/**
	 * Player - The player or players who will
	 * receive damage. Can use most Player based
	 * Value Syntax to select one or multiple players.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Damager - The player who will receive credit
	 * for the damage. A damager of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damager: string | number | any[],
	/**
	 * Amount - The amount of damage to apply.
	 * This amount may be modified by buffs, debuffs,
	 * or armor. Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	amount: string | number | any[]
) => {

	return `Damage(${player}, ${damager}, ${amount})`
}