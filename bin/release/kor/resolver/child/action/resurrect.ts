/**
 * 전환 없이 플레이어를
 * 사망한 자리에서 즉시 부활시킵니다.
 */
export const resurrect = (
	/**
	 * 부활하게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Resurrect(${player})`
}