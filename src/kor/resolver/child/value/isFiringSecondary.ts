import { IIsFiringSecondary } from '../../../interface'

/**
 * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
 */
export const isFiringSecondary = (value: IIsFiringSecondary) => {
	return `Is Firing Secondary(${value['player']})`
}