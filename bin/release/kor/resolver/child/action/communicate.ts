/**
 * 플레이어가 감정 표현, 음성 대사,
 * 또는 기타 장착한 의사소통
 * 수단을 사용하도록 합니다.
 */
export const communicate = (
	/**
	 * 의사소통을 실행할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 의사소통 유형입니다.
	 * - `Type.Communication.`
	 */
	type: string | number | any[]
) => {

	return `Communicate(${player}, ${type})`
}