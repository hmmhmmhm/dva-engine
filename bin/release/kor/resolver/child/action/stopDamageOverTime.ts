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
	 * - `Type.DamageOverTime.`
	 */
	damageOverTimeId: string | number | any[]
) => {

	return `Stop Damage Over Time(${damageOverTimeId})`
}