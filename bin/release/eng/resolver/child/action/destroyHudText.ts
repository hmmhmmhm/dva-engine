/**
 * Destroys hud text that was created by create hud text.
 */
export const destroyHudText = (
	/**
	 * Text ID - Specifies which hud text to destroy.
	 * This ID may be last text ID or a variable
	 * into which last text ID was earlier stored.
	 * - `Type.Text.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	textId: string | number | any[]
) => {

	return `Destroy Hud Text(${textId})`
}