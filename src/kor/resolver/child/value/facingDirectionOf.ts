/**
 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
 * 방향의 상대적인 단위 길이 방향 벡터입니다.
 * 이 값에는 종 및 횡 방향이 있습니다.
 */
export const facingDirectionOf = (
	/**
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Facing Direction Of(${player})`
}