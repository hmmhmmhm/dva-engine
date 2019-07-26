/**
 * 플레이어의 투사체 속도를
 * 일반 투사체 속도의
 * 지정된 비율로 설정합니다.
 */
export const setProjectileSpeed = (
	/**
	 * 투사체 속도를 설정할
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 일반 투사체 속도에
	 * 비례하도록 설정할
	 * 플레이어의 개인
	 * 투사체 속도 비율입니다.
	 * - `Type.Number.`
	 */
	projectileSpeedPercent: string | number | any[]
) => {

	return `Set Projectile Speed(${player}, ${projectileSpeedPercent})`
}