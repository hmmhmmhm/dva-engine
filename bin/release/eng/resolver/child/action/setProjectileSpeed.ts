/**
 * Sets the projectile speed for one or more
 * players to a percentage of regular projectile speed.
 */
export const setProjectileSpeed = (
	/**
	 * Player - The player or players whose projectile
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Projectile Speed Percent - The percentage
	 * of the regular projectile speed to which
	 * the player or players will set their personal
	 * projectile speed. Can use most Number based
	 * Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	projectileSpeedPercent: string | number | any[]
) => {

	return `Set Projectile Speed(${player}, ${projectileSpeedPercent})`
}