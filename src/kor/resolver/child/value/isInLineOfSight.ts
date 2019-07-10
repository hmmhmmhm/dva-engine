import { IIsInLineOfSight } from '../../../interface'

/**
 * 두 위치가 서로 보이는지 여부입니다.
 */
export const isInLineOfSight = (value: IIsInLineOfSight) => {
	return `Is In Line Of Sight(${value['startPos']}, ${value['endPos']}, ${value['barriers']})`
}