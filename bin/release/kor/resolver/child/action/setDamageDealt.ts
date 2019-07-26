/**
 * 플레이어가 주는 피해를
 * 순수 피해량 대비
 * % 비율로 설정합니다.
 */
export const setDamageDealt = (
	/**
	 * 주는 피해량을 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 순수 피해량에 비례하도록
	 * 설정할 플레이어의
	 * 주는 피해량 비율입니다.
	 * - `Type.Number.`
	 */
	damageDealtPercent: string | number | any[]
) => {

	return `Set Damage Dealt(${player}, ${damageDealtPercent})`
}