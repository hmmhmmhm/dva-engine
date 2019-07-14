/**
 * 플레이어에게 즉시 피해를 적용하며,
 * 피해를 받은 대상이 죽을 수 있습니다.
 */
export const damage = (
	/**
	 * 피해를 받게 될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 피해를 주는 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * DAMAGER가 NULL이면
	 * 집계될 플레이어가 없음을 의미합니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damager: string,
	/**
	 * 적용할 피해량입니다.
	 * 이 피해량은 강화 효과,
	 * 약화 효과, 방어력에
	 * 의해 달라질 수 있습니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	amount: string
) => {

	return `Damage(${player}, ${damager}, ${amount})`
}