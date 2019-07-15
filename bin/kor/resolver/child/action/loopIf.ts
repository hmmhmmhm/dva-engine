/**
 * 이 액션의 조건이 TRUE인 경우
 * 액션 목록을 처음부터 다시 시작합니다.
 * FALSE인 경우 다음 액션을 진행합니다.
 * 무한 반복을 방지하려면 액션 목록의 시작과
 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
 */
export const loopIf = (
	/**
	 * 반복 여부를 지정합니다.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string
) => {

	return `Loop If(${condition})`
}