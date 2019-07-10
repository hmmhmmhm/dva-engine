import { IMin } from '../../../interface'

/**
 * 두 숫자 중 낮은 수입니다.
 */
export const min = (value: IMin) => {
	return `Min(${value['value1']}, ${value['value2']})`
}