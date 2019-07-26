/**
 * Sets the projectile gravity for one or more
 * players to a percentage of regular projectile gravity.
 */
export const setProjectileGravity = (
	/**
	 * Player - The player or players whose projectile
	 * gravity will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Projectile Gravity Percent - The percentage
	 * of the regular projectile gravity to which
	 * the player or players will set their personal
	 * projectile gravity. Can use most Number
	 * based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	projectileGravityPercent: string | number | any[]
) => {

	return `Set Projectile Gravity(${player}, ${projectileGravityPercent})`
}