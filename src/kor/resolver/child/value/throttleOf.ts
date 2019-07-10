import { IThrottleOf } from '../../../interface'

/**
 * 한 플레이어의 방향 입력 정보입니다. 
 * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
 * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
 */
export const throttleOf = (value: IThrottleOf) => {
	return `Throttle Of(${value['player']})`
}