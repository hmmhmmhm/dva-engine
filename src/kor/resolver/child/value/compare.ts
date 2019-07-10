import { ICompare } from '../../../interface'

/**
 * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
 */
export const compare = (value: ICompare) => {
	return `Compare(${value['value1']}, ${value['operator']}, ${value['value2']})`
}