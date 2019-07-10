import { IPlayersWithinRadius } from '../../../interface'

/**
 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
 * 팀 또는 시야 범위로 제한할 수 있습니다.
 */
export const playersWithinRadius = (value: IPlayersWithinRadius) => {
	return `Players Within Radius(${value['center']}, ${value['radius']}, ${value['team']}, ${value['losCheck']})`
}