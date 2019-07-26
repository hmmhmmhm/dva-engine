/**
 * Starts an instance of damage over time,
 * this HOT will persist for the specified
 * duration or until stopped by script. To
 * obtain a reference to this HOT, use the
 * last damage over time to value.
 */
export const startHealOverTime = (
	/**
	 * Healer - The player who will receive credit
	 * for the heal. A damager of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax.
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
	 * Duration - The duration of the heal over
	 * time in seconds. To have a HOT that lasts
	 * until stopped by script, provide an arbitrarily
	 * long duration such as 9999. Can use most
	 * Number based Value Syntax to specify.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	duration: string | number | any[],
	/**
	 * Damage Per Second - The heal per second
	 * for the heal over time. Can use most Number
	 * based Value Syntax to specify.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healingPerSecond: string | number | any[]
) => {

	return `Start Heal Over Time(${player}, ${healer}, ${duration}, ${healingPerSecond})`
}