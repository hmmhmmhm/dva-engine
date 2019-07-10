import { IWorldVectorOf } from '../../../interface'

/**
 * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
 */
export const worldVectorOf = (value: IWorldVectorOf) => {
	return `World Vector Of(${value['localVector']}, ${value['relativePlayer']}, ${value['transformation']})`
}