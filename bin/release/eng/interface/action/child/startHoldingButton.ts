import {
    ValuePlayerType,
    ValueButtonType
} from '../../../type'

/**
 * Forces one or more players to hold a button
 * virtually until stopped by the stop holding button action.
 */
export interface IStartHoldingButton {
    /**
     * Player - The player or players who are holding
     * a button virtually. Can use most Player
     * based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Button - The logical button that is being held virtually.
     */
    button: ValueButtonType
}