import { IRayCastHitPosition } from '../../../interface'

/**
 * 레이캐스트로 맞힌 표면,
 * 오브젝트, 또는 플레이어의 위치
 * (아무것도 맞지 않는 경우 END POS)입니다.
 */
export const rayCastHitPosition = (value: IRayCastHitPosition) => {
	return `Ray Cast Hit Position(${value['startPos']}, ${value['endPos']}, ${value['playersToInclude']}, ${value['playersToExclude']}, ${value['IncludePlayerOwnedObjects']})`
}