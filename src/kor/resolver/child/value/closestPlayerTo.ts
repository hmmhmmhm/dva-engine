import { IClosestPlayerTo } from '../../../interface'

/**
 * 한 위치에서 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
export const closestPlayerTo = (value: IClosestPlayerTo) => {
	return `Closest Player To(${value['center']}, ${value['team']})`
}