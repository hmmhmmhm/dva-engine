import { ValuePlayerType, ValueButtonType } from '../../../type'

/**
 * Forces one or more players to press a button
 * virtually for a single frame.
 */
export interface IPressButton {
    /**
     * Player - The player or players for whom
     * virtual button input will be forced. Can
     * use most Player based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Button - The button to be pressed.
     */
    button: ValueButtonType
}