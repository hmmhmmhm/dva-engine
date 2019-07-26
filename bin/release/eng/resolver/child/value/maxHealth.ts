/**
 * The max health of a player, including armor and shields.
 */
export const maxHealth = (
	/**
	 * Player - The player whose max health to
	 * compare. Can use any Player based Value
	 * syntax to provide with.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Max Health(${player})`
}

