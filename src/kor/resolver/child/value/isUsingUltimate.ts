import { IIsUsingUltimate } from '../../../interface'

/**
 * 플레이어가 궁극기를 사용하는지 여부입니다.
 */
export const isUsingUltimate = (value: IIsUsingUltimate) => {
	return `Is Using Ultimate(${value['player']})`
}