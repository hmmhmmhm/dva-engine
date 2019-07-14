/**
 * 지정된 최대 및 최소값 범위
 * 내에서의 무작위 실수값 하나입니다.
 */
export const randomReal = (
	/**
	 * 허용된 최소 실수값입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	min: string,
	/**
	 * 허용된 최소 실수값입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	max: string
) => {

	return `Random Real(${min}, ${max})`
}