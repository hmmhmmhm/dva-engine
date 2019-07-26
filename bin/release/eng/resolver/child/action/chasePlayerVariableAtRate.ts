/**
 * Gradually modifies the value of a player
 * variable at a specific rate. (A player variable
 * is a variable that belongs to a specific player.)
 */
export const chasePlayerVariableAtRate = (
	/**
	 * Player - The player whose variable will
	 * gradually change. If multiple players are
	 * provided, each of their variables will change independently.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Rate - The amount of change that will happen
	 * to the variable’s value each second. Can
	 * use most Number based Value Syntax to specify.
	 * - `Type.Variable.`
	 */
	variable: string | number | any[],
	/**
	 * Variable - The variable the action will
	 * manipulate. Can use most Variable based Value Syntax.
	 * - `Type.DestinationParam.`
	 */
	destination: string | number | any[],
	/**
	 * Player - The player whose variable will
	 * gradually change. If multiple players are
	 * provided, each of their variables will change independently.
	 * - `Type.Number.`
	 */
	rate: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.Reevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Chase Player Variable At Rate(${player}, ${variable}, ${destination}, ${rate}, ${reevaluation})`
}