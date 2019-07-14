/**
 * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
 */
export const crossProduct = (
	/**
	 * 가위곱의 왼쪽 벡터 피연산자입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string,
	/**
	 * 가위곱의 오른쪽 벡터 피연산자입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string
) => {

	return `Cross Product(${value1}, ${value2})`
}