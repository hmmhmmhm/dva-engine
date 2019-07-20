/**
 * 한 플레이어의 방향 입력 정보입니다. 
 * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
 * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
 */
export const throttleOf = (
	/**
	 * 방향 입력 정보를 가져올 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Throttle Of(${player})`
}

