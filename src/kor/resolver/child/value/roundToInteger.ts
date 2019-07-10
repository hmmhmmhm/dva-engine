import { IRoundToInteger } from '../../../interface'

/**
 * 지정된 값을 반올림할 대상 정수입니다.
 */
export const roundToInteger = (value: IRoundToInteger) => {
	return `Round To Integer(${value['value']}, ${value['roundingType']})`
}