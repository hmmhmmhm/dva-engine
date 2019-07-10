import { INot } from '../../../interface'

/**
 * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
 */
export const not = (value: INot) => {
	return `Not(${value['value']})`
}