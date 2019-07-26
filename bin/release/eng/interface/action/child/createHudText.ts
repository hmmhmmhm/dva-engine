import {
    ValuePlayerType,
    ValueColorType,
    ValueNumberType,
    ValueStringType,
    ValueLocationType,
    ValueHudTextReevaluationType,
    ValueStringParamType,
} from '../../../type'

import { INull } from '../../value'

/**
 * Creates HUD text visible to specific players
 * at specific location on the screen. This
 * text will persist until destroyed. To obtain
 * a reference to this text, use the last text
 * ID value. This action will fail if too many
 * text elements have been created.
 */
export interface ICreateHudText {
    /**
     * Header - The header text to be displayed
     * (can be blank). Can use most String based
     * Value Syntax to populate.
     */
    visibleTo: ValuePlayerType
    /**
     * Subheader - The subheader text to be displayed
     * (can be blank). Can use most String based
     * Value Syntax to populate.
     */
    header: ValueStringType
    /**
     * Text - The body text to be displayed (can
     * be blank). Can use most String based Value
     * Syntax to populate.
     */
    subHeader: ValueStringParamType
    /**
     * Location - The location on the screen where
     * text will appear. You can choose left, top, or right.
     */
    text: ValueStringParamType
    /**
     * Sort Order - The Sort Order of the text
     * relative to other text in the same location.
     * Text with a higher sort order will come
     * after text with a lower sort order. Can
     * use most Number based Value Syntax.
     */
    location: ValueLocationType
    /**
     * Header Color - The color of the Header text
     * to be created. If a particular team is chosen,
     * the effect will either be red or blue.
     */
    sortOrder: ValueNumberType
    /**
     * Subheader Color - The color of the Subheader
     * text to be created. If a particular team
     * is chosen, the effect will either be red or blue.
     */
    headerColor: ValueColorType
    /**
     * Text Color - The color of the body text
     * to be created. If a particular team is chosen,
     * the effect will either be red or blue.
     */
    subHeaderColor: ValueColorType
    /**
     * Reevaluation - Specifies which of this action’s
     * inputs will be continuously reevaluated,
     * the text will keep asking for and using
     * new values from reevaluated inputs.
     */
    textColor: ValueColorType
    /**
     * Visible to - One or more players who will
     * be able to see the icon. Can use most Value
     * Syntax to select one or multiple players.
     */
    reevaluation: ValueHudTextReevaluationType
}