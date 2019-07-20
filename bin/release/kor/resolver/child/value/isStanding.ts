/**
 * 플레이어가 서 있는 상태인지 여부
 * (이동하지 않고 공중에 있는
 * 상태가 아닌 경우로 판단)입니다.
 */
export const isStanding = (
	/**
	 * 서 있는 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Standing(${player})`
}