/**
 * The PLAYER DEALT FINAL BLOW event attribute
 * will affect the specified players who successfully
 * dealt the lethal damage against another
 * player in the game environment.
 */
export const playerDealtFinalBlow = (
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

	return `Player dealt final blow(${team}, ${player})`
}