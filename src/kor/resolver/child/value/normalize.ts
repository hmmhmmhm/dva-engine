import { INormalize } from '../../../interface'

/**
 * 벡터의 단위 길이 정규화입니다.
 */
export const normalize = (value: INormalize) => {
	return `Normalize(${value['position']})`
}