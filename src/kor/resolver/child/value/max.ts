import { IMax } from '../../../interface'

/**
 * 두 숫자 중 높은 수입니다.
 */
export const max = (value: IMax) => {
	return `Max(${value['value1']}, ${value['value2']})`
}