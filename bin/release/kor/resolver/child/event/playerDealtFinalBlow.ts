/**
 * 플레이어 한 명이 결정타를 날릴 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 * 
 * - 플레이어가 결정타로 피해를 입히면 Condition을 확인합니다.
 *    모든 Condition을 만족하면 Action이 실행되지만,
 *    하나라도 만족하지 않으면 실행되지 않습니다.
 */
export const playerDealtFinalBlow = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[],
	/**
	 * - `Type.EventPlayer.`
	 */
	player: string | number | any[]
) => {

	return `Player dealt final blow(${team}, ${player})`
}