/**
 * 플레이어를 즉시 처치합니다.
 */
export const kill = (
	/**
	 * 처치될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 처치를 기록한 것으로
	 * 집계될 플레이어입니다.
	 * KILLER가 NULL이면
	 * 집계될 플레이어가
	 * 없음을 의미합니다.
	 * - `Type.AssisterParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	killer: string | number | any[]
) => {

	return `Kill(${player}, ${killer})`
}