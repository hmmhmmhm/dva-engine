import { IRayCastHitNormal } from '../../../interface'

/**
 * RAY CAST HIT POSITION에서의 표면 법선
 * (아무것도 맞지 않은 경우 END POS에서 START POS)입니다.
 */
export const rayCastHitNormal = (value: IRayCastHitNormal) => {
	return `Ray Cast Hit Normal(${value['startPos']}, ${value['endPos']}, ${value['playersToInclude']}, ${value['playersToExclude']}, ${value['IncludePlayerOwnedObjects']})`
}