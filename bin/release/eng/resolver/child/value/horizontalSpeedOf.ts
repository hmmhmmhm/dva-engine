/**
 * The current horizontal speed of a player
 * in meters per second. This measurement excludes
 * all vertical motion.
 */
export const horizontalSpeedOf = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Speed Of(${player})`
}

