/**
 * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
 */
export const not = (
	/**
	 * 이 입력 정보가 FALSE
	 * (또는 그에 상응하는 경우)라면
	 * NOT 값은 TRUE입니다.
	 * 그 이외의 경우,
	 * NOT 값은 FALSE입니다.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Not(${value})`
}