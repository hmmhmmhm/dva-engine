/**
 * Declare a team as the current round winner.
 * This only works in the control and elimination game modes.
 */
export const declareRoundVictory = (
	/**
	 * Team - Round winning team. Can use most
	 * Team based Value Syntax for this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	roundWinningTeam: string | number | any[]
) => {

	return `Declare Round Victory(${roundWinningTeam})`
}