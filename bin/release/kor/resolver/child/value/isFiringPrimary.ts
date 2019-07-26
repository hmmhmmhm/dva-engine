/**
 * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
 */
export const isFiringPrimary = (
	/**
	 * 주무기 공격 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Firing Primary(${player})`
}