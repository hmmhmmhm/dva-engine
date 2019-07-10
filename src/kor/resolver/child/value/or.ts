import { IOr } from '../../../interface'

/**
 * 두 입력 정보 중 하나가
 * TRUE(또는 그에 상응하는 경우)
 * 인지 여부입니다.
 */
export const or = (value: IOr) => {
	return `Or(${value['value1']}, ${value['value2']})`
}