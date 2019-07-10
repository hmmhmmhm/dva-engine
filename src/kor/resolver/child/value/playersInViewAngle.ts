import { IPlayersInViewAngle } from '../../../interface'

/**
 * 지정된 플레이어의 조준선을 기준으로
 * 시야각 안에 있는 플레이어입니다.
 * 팀 단위로 제한할 수 있습니다.
 */
export const playersInViewAngle = (value: IPlayersInViewAngle) => {
	return `Players In View Angle(${value['player']}, ${value['team']}, ${value['viewAngle']})`
}