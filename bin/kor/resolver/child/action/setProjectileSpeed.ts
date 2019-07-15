/**
 * 플레이어의 투사체 속도를
 * 일반 투사체 속도의
 * 지정된 비율로 설정합니다.
 */
export const setProjectileSpeed = (
	/**
	 * 투사체 속도를 설정할
	 * 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 일반 투사체 속도에
	 * 비례하도록 설정할
	 * 플레이어의 개인
	 * 투사체 속도 비율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	projectileSpeedPercent: string
) => {

	return `Set Projectile Speed(${player}, ${projectileSpeedPercent})`
}