/**
 * 플레이어의 생존 여부와 관계 없이,
 * 플레이어를 적절한 생성 지점에서
 * 최대 생명력으로 부활시킵니다.
 */
export const respawn = (
	/**
	 * 부활시킬 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Respawn(${player})`
}