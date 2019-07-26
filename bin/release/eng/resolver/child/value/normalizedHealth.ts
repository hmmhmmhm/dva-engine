/**
 * The current health of a player. including
 * armor and shields, normalized between 0
 * and 1. (for example, 0 is no health, 0.5
 * is half health, 1 is full health, etc.)
 */
export const normalizedHealth = (
	/**
	 * Player - The player whose normalized health to acquire.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Normalized Health(${player})`
}

