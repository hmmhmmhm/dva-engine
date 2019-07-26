/**
 * START CAMERA 또는 한명 이상의 플레이어들의
 * 모든 이동 중인 카메라 위치를 정지시킵니다.
 */
export const stopCamera = (
	/**
	 * 카메라를 기본 뷰로 
	 * 되돌릴 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Stop Camera(${player})`
}