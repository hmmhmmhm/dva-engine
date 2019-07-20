/**
 * 두 입력 정보 중 하나가
 * TRUE(또는 그에 상응하는 경우)
 * 인지 여부입니다.
 */
export const or = (
	/**
	 * 두 입력 정보를 확인하여
	 * 하나가 TRUE(또는 그에 상응하는 경우)
	 * 인 경우, OR 값은 TRUE입니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * 두 입력 정보를 확인하여
	 * 하나가 TRUE(또는 그에 상응하는 경우)
	 * 인 경우, OR 값은 TRUE입니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
) => {

	return `Or(${value1}, ${value2})`
}