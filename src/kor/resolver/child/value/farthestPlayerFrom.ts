import { 
	ValueVectorType,
	ValuePlayerType,
 } from '../../../interface'

/**
 * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
 * 팀의 제한을 받을 수 있습니다.
 */
export const farthestPlayerFrom = (
	/**
	 * 거리 측정을 위한 위치입니다.
	 */
	center: ValueVectorType,
	/**
	 * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
	 */
	team: ValuePlayerType
) => {

	return `Farthest Player From(${center}, ${team})`
}