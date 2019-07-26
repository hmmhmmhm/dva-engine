/**
 * Declare a team as the current round winner.
 * This only works in the control and elimination game modes.
 */
export const declareRoundVictory = (
	/**
	 * Team - Round winning team. Can use most
	 * Team based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	roundWinningTeam: string | number | any[]
) => {

	return `Declare Round Victory(${roundWinningTeam})`
}