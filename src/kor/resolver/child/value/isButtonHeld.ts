import { IIsButtonHeld } from '../../../interface'

/**
 * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
 */
export const isButtonHeld = (value: IIsButtonHeld) => {
	return `Is Button Held(${value['player']}, ${value['button']})`
}