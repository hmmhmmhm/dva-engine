/**
 * 플레이어에 대해 지정된 영웅
 * 강제 선택 지정을 중지합니다.
 * 이를 통해 플레이어가 부활하지는 않지만,
 * 이후부터 영웅 선택을 할 수 있게 됩니다.
 */
export const stopForcingPlayerToBeHero = (
	/**
	 * 지정된 영웅 강제 선택이
	 * 해제될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Stop Forcing Player To Be Hero(${player})`
}