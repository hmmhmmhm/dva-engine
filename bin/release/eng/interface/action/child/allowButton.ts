import {
    ValuePlayerType,
    ValueButtonType,
} from '../../../type'

/**
 * Undoes the effect of the disallow button
 * action for one or more players.
 */
export interface IAllowButton {
    /**
     * Player - The player or players whose button
     * is being reenabled. Can use most Player
     * based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Button - The logical button that is being reenabled.
     */
    button: ValueButtonType
}