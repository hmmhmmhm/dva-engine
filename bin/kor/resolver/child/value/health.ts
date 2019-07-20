/**
 * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
 */
export const health = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Health(${player})`
}

