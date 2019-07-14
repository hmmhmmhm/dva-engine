/**
 * 플레이어가 감정 표현, 음성 대사,
 * 또는 기타 장착한 의사소통
 * 수단을 사용하도록 합니다.
 */
export const communicate = (
	/**
	 * 의사소통을 실행할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 의사소통 유형입니다.
	 * - `Communication.` 또는 `Type.Communication.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	type: string
) => {

	return `Communicate(${player}, ${type})`
}