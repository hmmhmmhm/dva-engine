/**
 * Creates HUD text visible to specific players
 * at specific location on the screen. This
 * text will persist until destroyed. To obtain
 * a reference to this text, use the last text
 * ID value. This action will fail if too many
 * text elements have been created.
 */
export const createHudText = (
	/**
	 * Header - The header text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.Player.`
	 */
	visibleTo: string | number | any[],
	/**
	 * Subheader - The subheader text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.String.`
	 */
	header: string | number | any[],
	/**
	 * Text - The body text to be displayed (can
	 * be blank). Can use most String based Value
	 * Syntax to populate.
	 * - `Type.StringParam.`
	 */
	subHeader: string | number | any[],
	/**
	 * Location - The location on the screen where
	 * text will appear. You can choose left, top, or right.
	 * - `Type.StringParam.`
	 */
	text: string | number | any[],
	/**
	 * Sort Order - The Sort Order of the text
	 * relative to other text in the same location.
	 * Text with a higher sort order will come
	 * after text with a lower sort order. Can
	 * use most Number based Value Syntax.
	 * - `Type.Location.`
	 */
	location: string | number | any[],
	/**
	 * Header Color - The color of the Header text
	 * to be created. If a particular team is chosen,
	 * the effect will either be red or blue.
	 * - `Type.Number.`
	 */
	sortOrder: string | number | any[],
	/**
	 * Subheader Color - The color of the Subheader
	 * text to be created. If a particular team
	 * is chosen, the effect will either be red or blue.
	 * - `Type.Color.`
	 */
	headerColor: string | number | any[],
	/**
	 * Text Color - The color of the body text
	 * to be created. If a particular team is chosen,
	 * the effect will either be red or blue.
	 * - `Type.Color.`
	 */
	subHeaderColor: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated,
	 * the text will keep asking for and using
	 * new values from reevaluated inputs.
	 * - `Type.Color.`
	 */
	textColor: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.HudTextReevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Create Hud Text(${visibleTo}, ${header}, ${subHeader}, ${text}, ${location}, ${sortOrder}, ${headerColor}, ${subHeaderColor}, ${textColor}, ${reevaluation})`
}