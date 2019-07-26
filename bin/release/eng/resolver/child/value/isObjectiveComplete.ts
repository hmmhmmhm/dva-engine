/**
 * Whether the specified objective has been
 * completed Results in false if the game mode
 * is not assault, escort, or assault/escort (hybrid).
 */
export const isObjectiveComplete = (
	/**
	 * Number - The index of the objective to consider,
	 * starting at 0 and counting up. Each control
	 * point, payload checkpoint, and payload destination
	 * has its own index. Can use most number based
	 * Value Syntax to retrieve this value. Value
	 * must be in the form of an integer (whole number).
	 * - `Type.Number.`
	 */
	number: string | number | any[]
) => {

	return `Is Objective Complete(${number})`
}