import { ILocalVectorOf } from '../../../interface'

/**
 * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
 */
export const localVectorOf = (value: ILocalVectorOf) => {
	return `Local Vector Of(${value['worldVector']}, ${value['relativePlayer']}, ${value['transformation']})`
}