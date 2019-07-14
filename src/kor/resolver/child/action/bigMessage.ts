/**
 * 지정된 플레이엉에게 보이도록
 * 큰 메시지를 조준선 위쪽에 표시합니다.
 */
export const bigMessage = (
	/**
	 * 해당 메시지를 보게 될 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string,
	/**
	 * 표시할 메시지입니다.
	 * - `String.` 또는 `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string
) => {

	return `Big Message(${visibleTo}, ${header})`
}