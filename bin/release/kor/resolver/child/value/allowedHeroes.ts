/**
 * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
 */
export const allowedHeroes = (
	/**
	 * 이 플레이어가 선택할 수 있는 영웅 목록을 가져옵니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Allowed Heroes(${player})`
}

