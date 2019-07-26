/**
 * 플레이어의 현재 속도(초당 미터)입니다.
 */
export const speedOf = (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Speed Of(${player})`
}

