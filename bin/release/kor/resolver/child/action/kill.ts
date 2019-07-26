/**
 * 플레이어를 즉시 처치합니다.
 */
export const kill = (
	/**
	 * 처치될 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 처치를 기록한 것으로
	 * 집계될 플레이어입니다.
	 * KILLER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.`
	 */
	killer: string | number | any[]
) => {

	return `Kill(${player}, ${killer})`
}