import { ValuePlayerType, ValueStringType } from '../../../type'

/**
 * Displays a small message beneath the reticle
 * that is visible to specific players.
 */
export interface ISmallMessage {
    /**
     * Visible to - One or more players who will
     * see the message. Can use most Player based Value Syntax.
     */
    visibleTo: ValuePlayerType
    /**
     * Header - The message to be displayed. Can
     * use most String based Value Syntax to specify.
     */
    header: ValueStringType
}