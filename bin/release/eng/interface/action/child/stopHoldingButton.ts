import { ValuePlayerType, ValueButtonType } from '../../../type'

/**
 * Undoes the effect of the start holding button
 * action for one or more players.
 */
export interface IStopHoldingButton {
    /**
     * Player - The player or players who are no
     * longer holding a button virtually. Can use
     * most Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * The logical button that is no longer being held virtually.
     */
    button: ValueButtonType
}