import { IRayCastHitPlayer } from '../../../interface'

/**
 * 레이캐스트로 맞힌 플레이어
 * (맞은 플레이어가 없는 경우 NULL)입니다.
 */
export const rayCastHitPlayer = (value: IRayCastHitPlayer) => {
	return `Ray Cast Hit Player(${value['startPos']}, ${value['endPos']}, ${value['playersToInclude']}, ${value['playersToExclude']}, ${value['IncludePlayerOwnedObjects']})`
}