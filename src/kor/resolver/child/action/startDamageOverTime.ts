/**
 * DAMAGE OVER TIME (DOT)
 * 인스턴스를 시작합니다.
 * 이 DOT는 지정된 지속 시간 동안
 * 또는 스크립트에 의해
 * 중지될 때까지 유지됩니다.
 * 이 DAMAGE OVER TIME에
 * 대한 참조를 얻으려면
 * LAST DAMAGE OVER TIME ID
 * 값을 사용하십시오.
 */
export const startDamageOverTime = (
	/**
	 * DAMAGE OVER TIME을
	 * 적용할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 피해를 주는 행동을 한 것으로
	 * 집계될 플레이어입니다.
	 * DAMAGER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damager: string,
	/**
	 * DAMAGE OVER TIME의
	 * 지속 시간(초)입니다.
	 * DAMAGE OVER TIME이
	 * 스크립트에 의해 
	 * 중지될 때까지 지속되게 하려면
	 * 지속 시간을 매우 길게
	 * 설정하십시오. (9999 등)
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	duration: string,
	/**
	 * DAMAGE OVER TIME의
	 * 초당 피해량입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damagePerSecond: string
) => {

	return `Start Damage Over Time(${player}, ${damager}, ${duration}, ${damagePerSecond})`
}