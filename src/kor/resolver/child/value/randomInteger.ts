import { IRandomInteger } from '../../../interface'

/**
 * 지정한 최대값 이하, 최소값 이상
 * 범위 내에서 무작위 정수값입니다.
 */
export const randomInteger = (value: IRandomInteger) => {
	return `Random Integer(${value['min']}, ${value['max']})`
}