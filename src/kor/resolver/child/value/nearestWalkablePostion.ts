import { INearestWalkablePostion } from '../../../interface'

/**
 * 서 있을 수 있고 생성 지점에서 접근 가능하며
 * 지정된 위치에서 가장 가까운 위치입니다.
 */
export const nearestWalkablePostion = (value: INearestWalkablePostion) => {
	return `Nearest Walkable Postion(${value['position']})`
}