/**
 * Provides an instantaneous heal to one or
 * more players. This heal will not resurrect dead players.
 */
export const heal = (
	/**
	 * Player - The player or players whose health
	 * will be restored. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Player - One or more players who will receive
	 * the heal over time. Can use most Player
	 * based Value Syntax.
	 * - `Type.AssisterParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healer: string | number | any[],
	/**
	 * Amount - The amount of healing to apply.
	 * This amount may be modified by buffs or
	 * debuffs, healing is capped by each player’s
	 * max health. Can use most Number based Value
	 * Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	amount: string | number | any[]
) => {

	return `Heal(${player}, ${healer}, ${amount})`
}