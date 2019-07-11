import { 
	ValueVectorType,
	ValueBarrierType,
 } from '../../../interface'

/**
 * 두 위치가 서로 보이는지 여부입니다.
 */
export const isInLineOfSight = (
	/**
	 * 시야 확인의 시작 위치입니다.
	 * 플레이어가 설정되어 있으면
	 * 해당 플레이어의 발 위로
	 * 2미터 위치가 사용됩니다.
	 */
	startPos: ValueVectorType,
	/**
	 * 시야 확인의 종료 위치입니다.
	 * 플레이어가 설정되어 있으면
	 * 해당 플레이어의 발 위로
	 * 2미터 위치가 사용됩니다.
	 */
	endPos: ValueVectorType,
	/**
	 * 방벽이 시야에 미치는 영향을 정의합니다.
	 * 방벽이 적 소유인지를 판정할 때는
	 * START POS에 제공된 플레이어의
	 * 소속(있는 경우)이 사용됩니다.
	 */
	barriers: ValueBarrierType
) => {

	return `Is In Line Of Sight(${startPos}, ${endPos}, ${barriers})`
}