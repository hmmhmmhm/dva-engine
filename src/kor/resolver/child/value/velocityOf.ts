/**
 * 플레이어의 현재 속도(벡터)입니다.
 * 해당 플레이어가 표면 위에 있는 경우,
 * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
 */
export const velocityOf = (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Velocity Of(${player})`
}