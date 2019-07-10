import { ITangentFromDegrees } from '../../../interface'

/**
 * 지정된 각(단위: 도)의 탄젠트 값입니다.
 */
export const tangentFromDegrees = (value: ITangentFromDegrees) => {
	return `Tangent From Degrees(${value['angle']})`
}