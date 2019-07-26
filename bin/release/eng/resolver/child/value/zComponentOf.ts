/**
 * The Z Component of the specified Vector,
 * usually representing a forward amount.
 */
export const zComponentOf = (
	/**
	 * Value - The vector from which to acquire
	 * the Z component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector: string | number | any[]
): number => {

	// @ts-ignore
	return `Z Component Of(${vector})`
}

