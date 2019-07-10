import { IString } from '../../../interface'

/**
 * 지정된 값의 제곱근입니다.
 */
export const string = (value: IString) => {
	return `String(${value['string']}, ${value['_0']}, ${value['_1']}, ${value['_2']})`
}