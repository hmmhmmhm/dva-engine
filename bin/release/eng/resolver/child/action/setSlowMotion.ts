/**
 * Sets the simulation rate for the entire
 * game, including all players, projectiles,
 * effects, and game mode logic.
 */
export const setSlowMotion = (
	/**
	 * Speed Percent - The simulation rate as a
	 * percentage of normal speed. Only rates up
	 * to 100% are allowed. Can use most Number
	 * based Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	speedPercent: string | number | any[]
) => {

	return `Set Slow Motion(${speedPercent})`
}