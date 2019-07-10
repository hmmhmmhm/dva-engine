import { IAbsoluteValue } from '../../../interface'

/**
 * 지정된 값의 절대값입니다.
 */
export const absoluteValue = (value: IAbsoluteValue) => {
	return `Absolute Value(${value['value']})`
}