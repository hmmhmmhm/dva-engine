export const stopCamera = (
	/**
	 * 카메라를 기본 뷰로 
	 * 되돌릴 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Stop Camera(${player})`
}