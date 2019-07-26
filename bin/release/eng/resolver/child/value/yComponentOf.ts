/**
 * The Y Component of the specified Vector,
 * usually representing a upward amount.
 */
export const yComponentOf = (
	/**
	 * Value - The vector from which to acquire
	 * the Y component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector: string | number | any[]
): number => {

	// @ts-ignore
	return `Y Component Of(${vector})`
}

