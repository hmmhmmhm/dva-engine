/**
 * Sets the projectile gravity for one or more
 * players to a percentage of regular projectile gravity.
 */
export const setProjectileGravity = (
	/**
	 * Player - The player or players whose projectile
	 * gravity will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Projectile Gravity Percent - The percentage
	 * of the regular projectile gravity to which
	 * the player or players will set their personal
	 * projectile gravity. Can use most Number
	 * based Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	projectileGravityPercent: string | number | any[]
) => {

	return `Set Projectile Gravity(${player}, ${projectileGravityPercent})`
}