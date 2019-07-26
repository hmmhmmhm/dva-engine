/**
 * Gradually modifies the value of a global
 * variable over time. (A global variable is
 * a variable that belongs to the game itself.)
 */
export const chaseGlobalVariableOverTime = (
	/**
	 * Variable - The variable the action will
	 * manipulate. Can use most Variable based Value Syntax.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * Destination - The value that the global
	 * variable will eventually reach. The type
	 * of this value may be either a number or
	 * a vector, through the variable’s existing
	 * value must be of the same type before the
	 * chase begins. Can use most Number or Vector
	 * based Value Syntax to specify.
	 * - `Type.DestinationParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	destination: string | number | any[],
	/**
	 * Destination - The value that the player
	 * variable will eventually reach. The type
	 * of this value may be either a number or
	 * a vector, through the variable’s existing
	 * value must be of the same type before the
	 * chase begins. Can use most Number or Vector
	 * based Value Syntax to specify.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	duration: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.Reevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Chase Global Variable Over Time(${variable}, ${destination}, ${duration}, ${reevaluation})`
}