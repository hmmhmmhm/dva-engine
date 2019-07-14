/**
 * 플레이어의 최대
 * 생명력을 순수 생명력 대비
 * % 비율로 설정합니다.
 * 이 액션을 수행하면
 * 플레이어의 현재 생명력이
 * 새로운 최대 생명력 수치를
 * 넘지 않게 됩니다.
 */
export const setMaxHealth = (
	/**
	 * 최대 생명력을
	 * 설정할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 순수 최대 생명력에
	 * 비례하도록 설정할
	 * 플레이어의 최대
	 * 생명력 비율입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healthPercent: string
) => {

	return `Set Max Health(${player}, ${healthPercent})`
}