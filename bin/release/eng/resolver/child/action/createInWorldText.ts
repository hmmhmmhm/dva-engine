/**
 * Creates in-world text visible to specific
 * players at specific position in the world.
 * This text will persist until destroyed.
 * To obtain a reference to this text, use
 * the last text ID value. This action will
 * fail if too many text elements have been created.
 */
export const createInWorldText = (
	/**
	 * Visible to - One or more players who will
	 * see the HUD text. Can use most Value Syntax
	 * to select one or multiple players.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * Header - The header text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string | number | any[],
	/**
	 * Position - The text’s position. If this
	 * value is a player, then the text will appear
	 * above the player’s head. Otherwise, the
	 * value is interpreted as a position in the
	 * world. Can use most Player or Vector based Value Syntax.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[],
	/**
	 * Scale - The text’s scale. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	scale: string | number | any[],
	/**
	 * Clipping - Specifies whether the text can
	 * be seen through walls or is instead clipped.
	 * - `Type.Clipping.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	clipping: string | number | any[],
	/**
	 * Clip Against Surfaces - The text may be
	 * partially or completely obscured by walls,
	 * floors, ceilings, players, or other solid objects.
	 * - `Type.InWorldTextReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Create In World Text(${visibleTo}, ${header}, ${position}, ${scale}, ${clipping}, ${reevaluation})`
}