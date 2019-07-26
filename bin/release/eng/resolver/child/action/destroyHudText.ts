/**
 * Destroys hud text that was created by create hud text.
 */
export const destroyHudText = (
	/**
	 * Text ID - Specifies which hud text to destroy.
	 * This ID may be last text ID or a variable
	 * into which last text ID was earlier stored.
	 * - `Type.Text.`
	 */
	textId: string | number | any[]
) => {

	return `Destroy Hud Text(${textId})`
}