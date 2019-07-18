/**
 * 플레이어의 사망에서
 * 부활 사이의 시간을 설정합니다.
 * 이 액션 실행 시점에서
 * 이미 사망한 플레이어의 경우
 * 변경사항이 다음
 * 사망 시부터 적용됩니다.
 */
export const setRespawnMaxTime = (
	/**
	 * 최대 부활 시간을
	 * 설정할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 사망과 부활 사이의 시간(초)입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	time: string
) => {

	return `Set Respawn Max Time(${player}, ${time})`
}