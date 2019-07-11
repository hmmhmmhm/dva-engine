import { 
	ValueVectorType,
	ValueArrayType,
	ValueBoolType,
 } from '../../../interface'

/**
 * RAY CAST HIT POSITION에서의 표면 법선
 * (아무것도 맞지 않은 경우 END POS에서 START POS)입니다.
 */
export const rayCastHitNormal = (
	/**
	 * 레이케스트의 시작 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 */
	startPos: ValueVectorType,
	/**
	 * 레이케스트의 종료 위치입니다.
	 * 플레이어가 설정되어 있으면,
	 * 해당 플레이어의 발 위로
	 * 2미터 지점이 사용됩니다.
	 */
	endPos: ValueVectorType,
	/**
	 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
	 */
	playersToInclude: ValueArrayType,
	/**
	 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
	 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
	 */
	playersToExclude: ValueArrayType,
	/**
	 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
	 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
	 */
	IncludePlayerOwnedObjects: ValueBoolType
) => {

	return `Ray Cast Hit Normal(${startPos}, ${endPos}, ${playersToInclude}, ${playersToExclude}, ${IncludePlayerOwnedObjects})`
}