import { IArctangentInDegrees } from '../../../interface'

/**
 * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
 * (흔히 ATAN2 로 불림)
 */
export const arctangentInDegrees = (value: IArctangentInDegrees) => {
	return `Arctangent In Degrees(${value['numerator']}, ${value['denominator']})`
}