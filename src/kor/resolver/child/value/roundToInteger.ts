/**
 * 지정된 값을 반올림할 대상 정수입니다.
 */
export const roundToInteger = (
	/**
	 * 반올림할 실수입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string,
	/**
	 * 값을 반올림하는 규칙을 결정합니다.
	 * - `Type.Rounding.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	roundingType: string
) => {

	return `Round To Integer(${value}, ${roundingType})`
}