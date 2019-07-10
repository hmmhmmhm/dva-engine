import { ISpeedOfInDirection } from '../../../interface'

/**
 * 지정된 방향에서 플레이어의
 * 현재 속도(초당 미터)입니다.
 */
export const speedOfInDirection = (value: ISpeedOfInDirection) => {
	return `Speed Of In Direction(${value['player']}, ${value['direction']})`
}