/**
 * The position in the world of the specified
 * objective (either a control point, a payload
 * checkpoint, or a payload destination) Valid
 * in Assault, Assault/Escort (Hybrid), Escort, and Control.
 */
export const objectivePosition = (
	/**
	 * Number - The index of the objective to consider,
	 * starting at 0 and counting up. Each control
	 * point, payload checkpoint, and payload destination
	 * as its own index. Can use most Number based
	 * Value Syntax to provide this value, but
	 * must output in a integer of 0, 1, or 2.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	number: string | number | any[]
): number => {

	// @ts-ignore
	return `Objective Position(${number})`
}

