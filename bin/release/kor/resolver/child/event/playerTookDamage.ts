/**
 * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
 *    모든 Condition을 만족하면Action이 실행되지만,
 *    하나라도 만족하지 않으면 실행되지 않습니다.
 */
export const playerTookDamage = (
	/**
	 * - `Type.TeamConstant.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Player took damage(${team}, ${player})`
}