import { INumber } from '../../../interface'

/**
 * 실수 형식의 상수입니다.
 */
export const number = (value: INumber) => {
	return `Number(${value['number']})`
}