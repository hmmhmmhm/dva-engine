/**
 * The ONGOING - EACH PLAYER event attribute
 * will affect the specified players in the
 * game environment.
 */
export const onGoingEachPlayer = (
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

	return `Ongoing - Each Player(${team}, ${player})`
}