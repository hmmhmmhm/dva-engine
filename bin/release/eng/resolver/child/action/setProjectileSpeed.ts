/**
 * Sets the projectile speed for one or more
 * players to a percentage of regular projectile speed.
 */
export const setProjectileSpeed = (
	/**
	 * Player - The player or players whose projectile
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Projectile Speed Percent - The percentage
	 * of the regular projectile speed to which
	 * the player or players will set their personal
	 * projectile speed. Can use most Number based
	 * Value Syntax for this value.
	 * - `Type.Number.`
	 */
	projectileSpeedPercent: string | number | any[]
) => {

	return `Set Projectile Speed(${player}, ${projectileSpeedPercent})`
}