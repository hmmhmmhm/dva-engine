/**
 * Text formed from a selection of strings
 * and specified values.
 */
export const string = (
	/**
	 * String - How the string will be structured
	 * using a series of text and phrases.
	 * - `Type.Text.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	string: string | number | any[],
	/**
	 * {0} - The first value in the string.
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	_0: string | number | any[],
	/**
	 * {1} - The second value in the string.
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	_1: string | number | any[],
	/**
	 * {2} - The third value in the string.
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	_2: string | number | any[]
) => {

	return `String(${string}, ${_0}, ${_1}, ${_2})`
}