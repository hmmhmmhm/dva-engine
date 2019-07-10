import { IXComponentOf } from '../../../interface'

/**
 * 지정된 벡터의 X 구성요소입니다.
 * 일반적으로 왼쪽 방향의 벡터량입니다.
 */
export const xComponentOf = (value: IXComponentOf) => {
	return `X Component Of(${value['value']})`
}