/**
 * Defines minimum and maximum movement input
 * values for one or more players. Possibly
 * forcing or preventing movement.
 */
export const startForcingThrottle = (
	/**
	 * Player - The player or players whose movement
	 * whill be forced or limited. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Min Forward - Sets the minimum run forward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	minForward: string | number | any[],
	/**
	 * Max Forward - Sets the maximum run forward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxForward: string | number | any[],
	/**
	 * Min Backward - Sets the minimum run backward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	minBackward: string | number | any[],
	/**
	 * Max Backward - Sets the maximum run backward
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxBackward: string | number | any[],
	/**
	 * Min Sideways - Sets the minimum run sideways
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	minSideways: string | number | any[],
	/**
	 * Max Forward - Sets the maximum run sideways
	 * amount. 0 allows the player or players to
	 * stop while 1 forces full forward movement.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxSideways: string | number | any[]
) => {

	return `Start Forcing Throttle(${player}, ${minForward}, ${maxForward}, ${minBackward}, ${maxBackward}, ${minSideways}, ${maxSideways})`
}