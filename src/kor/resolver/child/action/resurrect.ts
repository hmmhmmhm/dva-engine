/**
 * 전환 없이 플레이어를
 * 사망한 자리에서 즉시 부활시킵니다.
 */
export const resurrect = (
	/**
	 * 부활하게 될 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Resurrect(${player})`
}