import { IAnd } from '../../../interface'

/**
 * 두 입력 정보 모두 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
 */
export const and = (value: IAnd) => {
	return `And(${value['value1']}, ${value['value2']})`
}