import { IIsInViewAngle } from '../../../interface'

/**
 * 두 위치가 서로 보이는지 여부입니다.
 */
export const isInViewAngle = (value: IIsInViewAngle) => {
	return `Is In View Angle(${value['player']}, ${value['location']}, ${value['viewAngle']})`
}