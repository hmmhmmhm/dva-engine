/**
 * 플레이어의 투사체 중력을
 * 일반 투사체 중력의
 * 지정된 비율로 설정합니다.
 */
export const setProjectileGravity = (
	/**
	 * 투사체 중력을
	 * 설정할 플레이어입니다
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 일반 투사체 중력에
	 * 비례하도록 설정할
	 * 플레이어의 개인
	 * 투사체 중력 비율입니다.
	 * - `Type.Number.`
	 */
	projectileGravityPercent: string | number | any[]
) => {

	return `Set Projectile Gravity(${player}, ${projectileGravityPercent})`
}