import { IVerticalFacingAngleOf } from '../../../interface'

/**
 * 월드에 대해 상대적으로 플레이어가
 * 바라보고 있는 방향의 종축각(단위: 도)입니다.
 * 이 값은 플레이어가 내려다보는 경우 증가합니다.
 */
export const verticalFacingAngleOf = (value: IVerticalFacingAngleOf) => {
	return `Vertical Facing Angle Of(${value['player']})`
}