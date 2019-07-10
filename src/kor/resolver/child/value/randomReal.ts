import { IRandomReal } from '../../../interface'

/**
 * 지정된 최대 및 최소값 범위
 * 내에서의 무작위 실수값 하나입니다.
 */
export const randomReal = (value: IRandomReal) => {
	return `Random Real(${value['min']}, ${value['max']})`
}