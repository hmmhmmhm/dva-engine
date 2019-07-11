import { 
	ValueVectorType,
 } from '../../../interface'

/**
 * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
 */
export const crossProduct = (
	/**
	 * 가위곱의 왼쪽 벡터 피연산자입니다.
	 */
	value1: ValueVectorType,
	/**
	 * 가위곱의 오른쪽 벡터 피연산자입니다.
	 */
	value2: ValueVectorType
) => {

	return `Cross Product(${value1}, ${value2})`
}