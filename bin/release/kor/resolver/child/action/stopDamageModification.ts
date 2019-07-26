/**
 * START DAMAGE MODIFICATION 액션으로
 * 시작된 DAMAGE MODIFICATION 하나를 중지합니다.
 */
export const stopDamageModification = (
	/**
	 * 중지할 DAMAGE MODIFICATION 인스턴스를 지정합니다.
	 * 이 ID는 LAST DAMAGE MODIFICATION ID이거나,
	 * 이전에 LAST DAMAGE MODIFICATION ID가
	 * 저장되었던 변수일 수 있습니다.
	 * - `Type.DamageModification.`
	 */
	damageModificationId: string | number | any[]
) => {

	return `Stop Damage Modification(${damageModificationId})`
}