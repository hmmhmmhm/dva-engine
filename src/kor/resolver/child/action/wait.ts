/**
 * 액션 목록 실행을 일시정지합니다.
 * WAIT이 중지되지 않는 한,
 * 나머지 액션은 일시정지 해제 후 실행됩니다.
 */
export const wait = (
	/**
	 * 일시정지의 지속시간입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	time: string,
	/**
	 * WAIT이 중지되는 조건 및 방법을 설정합니다.
	 * 조건 목록이 무시되면 WAIT은 중지되지 않으며,
	 * 그 외의 경우에는 조건 목록에 의해
	 * 액션 목록의 중지 혹은 재시작 여부가 결정됩니다.
	 * - `Type.WaitBehavior.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	waitBehavior: string
) => {

	return `Wait(${time}, ${waitBehavior})`
}