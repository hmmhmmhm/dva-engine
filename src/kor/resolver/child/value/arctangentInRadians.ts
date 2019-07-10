import { IArctangentInRadians } from '../../../interface'

/**
 * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
 * (흔히 ATAN2 로 불림)
 */
export const arctangentInRadians = (value: IArctangentInRadians) => {
	return `Arctangent In Radians(${value['numerator']}, ${value['denominator']})`
}