/**
 * 이 액션 조건이 TRUE일 때 액션 목록 실행을 중지합니다.
 * 그 외에 경우 다음 액션을 진행합니다.
 */
export const abortIf = (
	/**
	 * 실행 중지 여부를 지정합니다.
	 * - `Bool.` 또는 `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string
) => {

	return `Abort If(${condition})`
}