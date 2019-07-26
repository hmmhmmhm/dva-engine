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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * Subheader - The subheader text to be displayed
	 * (can be blank). Can use most String based
	 * Value Syntax to populate.
	 * - `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string | number | any[],
	/**
	 * Text - The body text to be displayed (can
	 * be blank). Can use most String based Value
	 * Syntax to populate.
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	subHeader: string | number | any[],
	/**
	 * Location - The location on the screen where
	 * text will appear. You can choose left, top, or right.
	 * - `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	text: string | number | any[],
	/**
	 * Sort Order - The Sort Order of the text
	 * relative to other text in the same location.
	 * Text with a higher sort order will come
	 * after text with a lower sort order. Can
	 * use most Number based Value Syntax.
	 * - `Type.Location.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	location: string | number | any[],
	/**
	 * Header Color - The color of the Header text
	 * to be created. If a particular team is chosen,
	 * the effect will either be red or blue.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	sortOrder: string | number | any[],
	/**
	 * Subheader Color - The color of the Subheader
	 * text to be created. If a particular team
	 * is chosen, the effect will either be red or blue.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	headerColor: string | number | any[],
	/**
	 * Text Color - The color of the body text
	 * to be created. If a particular team is chosen,
	 * the effect will either be red or blue.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	subHeaderColor: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continuously reevaluated,
	 * the text will keep asking for and using
	 * new values from reevaluated inputs.
	 * - `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	textColor: string | number | any[],
	/**
	 * Visible to - One or more players who will
	 * be able to see the icon. Can use most Value
	 * Syntax to select one or multiple players.
	 * - `Type.HudTextReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Create Hud Text(${visibleTo}, ${header}, ${subHeader}, ${text}, ${location}, ${sortOrder}, ${headerColor}, ${subHeaderColor}, ${textColor}, ${reevaluation})`
}