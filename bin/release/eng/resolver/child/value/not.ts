/**
 * Whether the input is false (or the equivalent to false)
 */
export const not = (
	/**
	 * Value - When this input is false (or equivalent
	 * to false), then the not value is true. Otherwise,
	 * the not value is false. Can use most Boolean-based
	 * Value Syntax to provide this value.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Not(${value})`
}