/**
 * 플레이어를 대상으로 지정된 영웅을 강제 선택하도록 하며,
 * 필요시 현재 위치에 즉시 부활시킵니다.
 * 이 영웅은 STOP FORCING PLAYER TO BE HERO
 * 액션이 실행되기 전까지 해당 플레이어가
 * 유일하게 사용할 수 있는 영웅입니다.
 */
export const startForcingPlayerToBeHero = (
	/**
	 * 지정된 영웅이 강제
	 * 선택되는 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어에게 강제로
	 * 설정된 영웅입니다.
	 * - `Hero.` 또는 `Type.Hero.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	hero: string
) => {

	return `Start Forcing Player To Be Hero(${player}, ${hero})`
}