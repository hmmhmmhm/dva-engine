/**
 * Modifies the value of a player variable
 * at an index, which is a variable that belongs
 * to a specific player.
 */
export const modifyPlayerVariableAtIndex = (
	/**
	 * Operation - The way in which the variable’s
	 * value will be changed. Options include standard
	 * arithmetic operations as well as array operations
	 * for appending and removing values.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Value - The value used for the modification.
	 * For arithmetic operations, this is the second
	 * of two operands, with the other being the
	 * variable’s existing value. For array operations,
	 * this is the value to append or remove. Various
	 * Value Syntax can be used.
	 * - `Type.IPlayer.`
	 */
	variable: string | number | any[],
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	index: string | number | any[],
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation: string | number | any[],
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with new elements
	 * given a value of 0.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Modify Player Variable At Index(${player}, ${variable}, ${index}, ${operation}, ${value})`
}