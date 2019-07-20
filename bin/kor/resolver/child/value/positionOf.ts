/**
 * 플레이어의 현재 위치(벡터)입니다.
 */
export const positionOf = (
	/**
	 * 위치 값 정보를 가져올 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Position Of(${player})`
}

