/**
 * The X Component of the specified Vector,
 * usually representing a leftward amount.
 */
export const xComponentOf = (
	/**
	 * Value - The vector from which to acquire
	 * the X component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector: string | number | any[]
): number => {

	// @ts-ignore
	return `X Component Of(${vector})`
}

