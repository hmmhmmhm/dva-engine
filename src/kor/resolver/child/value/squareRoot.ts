import { ISquareRoot } from '../../../interface'

/**
 * 지정된 값의 제곱근입니다.
 */
export const squareRoot = (value: ISquareRoot) => {
	return `Square Root(${value['value']})`
}