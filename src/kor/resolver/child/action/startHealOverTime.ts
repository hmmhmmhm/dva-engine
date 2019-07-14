/**
 * HEAL OVER TIME 인스턴스를 시작합니다.
 * 이 HEAL OVER TIME은 지정된 지속 시간이 경과하거나
 * 스크립트에 의해 중지되기 전까지 유지됩니다.
 * 이 HEAL OVER TIME을 참조하려면
 * LAST HEAL OVER TIME ID 값을 사용하십시오.
 */
export const startHealOverTime = (
	/**
	 * HEAL OVER TIME을
	 * 적용할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 치유 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * HEALER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healer: string,
	/**
	 * HEAL OVER TIME의 지속 시간(초)입니다.
	 * HEAL OVER TIME이 스크립트에 의해
	 * 중지될 때까지 지속되게 하려면
	 * 9999등 매우 긴 시간으로 설정하십시오.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	duration: string,
	/**
	 * HEAL OVER TIME의 초당 치유량입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healingPerSecond: string
) => {

	return `Start Heal Over Time(${player}, ${healer}, ${duration}, ${healingPerSecond})`
}