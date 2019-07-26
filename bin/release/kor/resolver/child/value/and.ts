/**
 * 두 입력 정보 모두 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
 */
export const and = (
	/**
	 * 두 입력 정보를 확인하여 둘 다 TRUE(또는 그에 상응하는 경우)인경우, AND 값은 TRUE입니다.
	 * - `Type.Value.`
	 */
	value1: string | number | any[],
	/**
	 * 두 입력 정보를 확인하여 둘 다 TRUE(또는 그에 상응하는 경우)인경우, AND 값은 TRUE입니다.
	 * - `Type.Value.`
	 */
	value2: string | number | any[]
) => {

	return `And(${value1}, ${value2})`
}