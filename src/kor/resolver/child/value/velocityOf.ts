import { IVelocityOf } from '../../../interface'

/**
 * 플레이어의 현재 속도(벡터)입니다.
 * 해당 플레이어가 표면 위에 있는 경우,
 * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
 */
export const velocityOf = (value: IVelocityOf) => {
	return `Velocity Of(${value['player']})`
}