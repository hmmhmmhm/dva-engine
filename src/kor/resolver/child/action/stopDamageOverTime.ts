/**
 * START DAMAGE OVER TIME 액션에 의해 시작된
 * DAMAGE OVER TIME 인스턴스를 중지합니다.
 */
export const stopDamageOverTime = (
	/**
	 * 중지할 DAMAGE OVER TIME 인스턴스를 지정합니다.
	 * 여기에 사용되는 ID는 LAST DAMAGE MODIFICATION ID이거나,
	 * 이전에 LAST DAMAGE MODIFICATION ID가
	 * 저장되었던 변수일 수 있습니다.
	 * - `DamageOverTime.` 또는 `Type.DamageOverTime.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damageOverTimeId: string
) => {

	return `Stop Damage Over Time(${damageOverTimeId})`
}