/**
 * 지정된 플레이어의 조준선을 기준으로
 * 시야각 안에 있는 플레이어입니다.
 * 팀 단위로 제한할 수 있습니다.
 */
export const playersInViewAngle = (
	/**
	 * 시야를 확인할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 플레이어를 고려할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	viewAngle: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players In View Angle(${player}, ${team}, ${viewAngle})`
}

