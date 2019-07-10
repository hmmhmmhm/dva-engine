import { IDotProduct } from '../../../interface'

/**
 * 지정된 값의 점곱입니다.
 */
export const dotProduct = (value: IDotProduct) => {
	return `Dot Product(${value['value1']}, ${value['value2']})`
}