/**
 * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
 */
export const isFiringSecondary = (
	/**
	 * 보조 무기 공격 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is Firing Secondary(${player})`
}