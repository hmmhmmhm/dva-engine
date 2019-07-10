import { IIsPortraitOnFire } from '../../../interface'

/**
 * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
 */
export const isPortraitOnFire = (value: IIsPortraitOnFire) => {
	return `Is Portrait On Fire(${value['player']})`
}