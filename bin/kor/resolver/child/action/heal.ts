/**
 * 플레이어를 즉시 치유합니다.
 * 이 기능으로 죽은 플레이어가
 * 부활하지는 않습니다.
 */
export const heal = (
	/**
	 * 생명력을 회복할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 치유 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * HEALER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healer: string | number | any[],
	/**
	 * 적용할 치유량입니다.
	 * 이 치유량은 강화 효과,
	 * 약화 효과 등에 의해
	 * 달라질 수 있습니다.
	 * 치유량 최대치는
	 * 각 플레이어의
	 * 최대 생명력입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	amount: string | number | any[]
) => {

	return `Heal(${player}, ${healer}, ${amount})`
}