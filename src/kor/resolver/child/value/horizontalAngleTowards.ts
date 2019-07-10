import { IHorizontalAngleTowards } from '../../../interface'

/**
 * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
 * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
 * 그 외의 경우 0이거나 음수입니다.
 */
export const horizontalAngleTowards = (value: IHorizontalAngleTowards) => {
	return `Horizontal Angle Towards(${value['player']}, ${value['position']})`
}