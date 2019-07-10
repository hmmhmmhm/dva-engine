import { IFarthestPlayerFrom } from '../../../interface'

/**
 * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
 * 팀의 제한을 받을 수 있습니다.
 */
export const farthestPlayerFrom = (value: IFarthestPlayerFrom) => {
	return `Farthest Player From(${value['center']}, ${value['team']})`
}