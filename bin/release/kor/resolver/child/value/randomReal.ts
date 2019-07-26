/**
 * 지정된 최대 및 최소값 범위
 * 내에서의 무작위 실수값 하나입니다.
 */
export const randomReal = (
	/**
	 * 허용된 최소 실수값입니다.
	 * - `Type.Number.`
	 */
	min: string | number | any[],
	/**
	 * 허용된 최소 실수값입니다.
	 * - `Type.Number.`
	 */
	max: string | number | any[]
): number => {

	// @ts-ignore
	return `Random Real(${min}, ${max})`
}

