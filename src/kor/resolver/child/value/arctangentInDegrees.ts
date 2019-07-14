/**
 * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
 * (흔히 ATAN2 로 불림)
 */
export const arctangentInDegrees = (
	/**
	 * 함수의 분자 입력 정보입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	numerator: string,
	/**
	 * 함수의 분모 입력 정보입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	denominator: string
) => {

	return `Arctangent In Degrees(${numerator}, ${denominator})`
}