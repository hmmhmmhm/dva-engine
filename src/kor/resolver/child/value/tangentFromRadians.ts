import { ITangentFromRadians } from '../../../interface'

/**
 * 지정된 각(단위: RAD)의 탄젠트 값입니다.
 */
export const tangentFromRadians = (value: ITangentFromRadians) => {
	return `Tangent From Radians(${value['angle']})`
}