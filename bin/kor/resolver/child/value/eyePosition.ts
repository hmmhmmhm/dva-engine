/**
 * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
 */
export const eyePosition = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Eye Position(${player})`
}

