import { ValuePlayerType, ValueStringType } from '../../../type'

/**
 * Displays a large message above the reticle
 * that is visible to specific players.
 */
export interface IBigMessage {
    /**
     * Visible to - One or more players who will
     * see the message. Can use most Value Syntax
     * to select multiple players to specify.
     */
    visibleTo: ValuePlayerType
    /**
     * Header - The message to be displayed. Can
     * use most String based Value Syntax to specify.
     */
    header: ValueStringType
}