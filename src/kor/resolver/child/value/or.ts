import { 
	ValueType,
 } from '../../../interface'

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
	 */
	value1: ValueType,
	/**
	 * 두 입력 정보를 확인하여
	 * 하나가 TRUE(또는 그에 상응하는 경우)
	 * 인 경우, OR 값은 TRUE입니다.
	 */
	value2: ValueType
) => {

	return `Or(${value1}, ${value2})`
}