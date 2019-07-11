import { 
	ValuePlayerType,
	ValueVectorType,
	ValueNumberType,
 } from '../../../interface'

/**
 * 두 위치가 서로 보이는지 여부입니다.
 */
export const isInViewAngle = (
	/**
	 * 시야를 확인할 플레이어입니다.
	 */
	player: ValuePlayerType,
	/**
	 * 시야에 있는지 테스트할 LOCATION입니다.
	 */
	location: ValueVectorType,
	/**
	 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
	 */
	viewAngle: ValueNumberType
) => {

	return `Is In View Angle(${player}, ${location}, ${viewAngle})`
}