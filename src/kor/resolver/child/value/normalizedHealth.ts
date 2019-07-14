/**
 * 방어력 및 보호막을 포함하여 0과 1사이로 
 * 정규화 된 플레이어의 현재 생명력입니다.
 * (예를 들어, 0은 생명력 없음,
 * 0.5는 생명력 절반, 1은 최대 생명력 등등)
 */
export const normalizedHealth = (
	/**
	 * 정규화된 생명력을 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Normalized Health(${player})`
}