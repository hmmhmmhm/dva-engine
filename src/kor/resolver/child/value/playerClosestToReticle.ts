import { IPlayerClosestToReticle } from '../../../interface'

/**
 * 지정된 플레이어의 조준선에서
 * 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
export const playerClosestToReticle = (value: IPlayerClosestToReticle) => {
	return `Player Closest To Reticle(${value['player']}, ${value['team']})`
}