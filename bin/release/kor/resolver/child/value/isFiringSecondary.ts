/**
 * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
 */
export const isFiringSecondary = (
	/**
	 * 보조 무기 공격 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Firing Secondary(${player})`
}