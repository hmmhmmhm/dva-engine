import { IIsTrueForAny } from '../../../interface'

/**
 * 지정된 배열의 값 중 하나가 지정된 조건에 대해 TRUE인지 여부입니다.
 */
export const isTrueForAny = (value: IIsTrueForAny) => {
	return `Is True For Any(${value['array']}, ${value['condition']})`
}