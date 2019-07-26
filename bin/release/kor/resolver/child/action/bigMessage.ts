/**
 * 지정된 플레이엉에게 보이도록
 * 큰 메시지를 조준선 위쪽에 표시합니다.
 */
export const bigMessage = (
	/**
	 * 해당 메시지를 보게 될 플레이어입니다.
	 * - `Type.Player.`
	 */
	visibleTo: string | number | any[],
	/**
	 * 표시할 메시지입니다.
	 * - `Type.String.`
	 */
	header: string | number | any[]
) => {

	return `Big Message(${visibleTo}, ${header})`
}