/**
 * 플레이어가 궁극기를 사용하는지 여부입니다.
 */
export const isUsingUltimate = (
	/**
	 * 궁극기 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is Using Ultimate(${player})`
}