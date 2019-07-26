/**
 * The slot number of the specified player.
 * In team games, each team has slots 0 through
 * 5. In free-for-all games, slots are numbers 0 through 11.
 */
export const slotOf = (
	/**
	 * Player - The player whose slot number to
	 * acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Slot Of(${player})`
}

