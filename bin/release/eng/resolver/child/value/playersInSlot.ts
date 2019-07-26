/**
 * The player or array of players who occupy
 * a specific slot in the game.
 */
export const playersInSlot = (
	/**
	 * Slot - The slot number from each to acquire
	 * a player or players. In team games, each
	 * team has slots 0 through 5. In free-for-all
	 * games, slots are numbered 0 through 11.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	slot: string | number | any[],
	/**
	 * Team - The team or teams from which to acquire
	 * a player or players. Can use most Team based
	 * Value Syntax to provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players In Slot(${slot}, ${team})`
}

