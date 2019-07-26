/**
 * An array containing all living players on
 * a team in a match. A player is defined as
 * being alive when they are spawned into the
 * game but have not yet been eliminated since spawning.
 */
export const allLivingPlayers = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Living Players(${team})`
}

