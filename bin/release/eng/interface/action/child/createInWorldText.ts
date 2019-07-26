import {
    ValuePlayerType,
    ValueNumberType,
    ValueStringType,
    ValueVectorType,
    ValueInWorldTextReevaluationType,
    ValueClippingType,
} from '../../../type'

/**
 * Creates in-world text visible to specific
 * players at specific position in the world.
 * This text will persist until destroyed.
 * To obtain a reference to this text, use
 * the last text ID value. This action will
 * fail if too many text elements have been created.
 */
export interface ICreateInWorldText {
    /**
     * Visible to - One or more players who will
     * see the HUD text. Can use most Value Syntax
     * to select one or multiple players.
     */
    visibleTo: ValuePlayerType
    /**
     * Header - The header text to be displayed
     * (can be blank). Can use most String based
     * Value Syntax to populate.
     */
    header: ValueStringType
    /**
     * Position - The text’s position. If this
     * value is a player, then the text will appear
     * above the player’s head. Otherwise, the
     * value is interpreted as a position in the
     * world. Can use most Player or Vector based Value Syntax.
     */
    position: ValueVectorType
    /**
     * Scale - The text’s scale. Can use most Number
     * based Value Syntax.
     */
    scale: ValueNumberType
    /**
     * Clipping - Specifies whether the text can
     * be seen through walls or is instead clipped.
     */
    clipping: ValueClippingType
    /**
     * Clip Against Surfaces - The text may be
     * partially or completely obscured by walls,
     * floors, ceilings, players, or other solid objects.
     */
    reevaluation: ValueInWorldTextReevaluationType
}