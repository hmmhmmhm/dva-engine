/**
 * 플레이어의 생존 여부와 관계 없이,
 * 플레이어를 적절한 생성 지점에서
 * 최대 생명력으로 부활시킵니다.
 */
export const respawn = (
	/**
	 * 부활시킬 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Respawn(${player})`
}