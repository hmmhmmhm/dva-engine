import { ICrossProduct } from '../../../interface'

/**
 * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
 */
export const crossProduct = (value: ICrossProduct) => {
	return `Cross Product(${value['value1']}, ${value['value2']})`
}