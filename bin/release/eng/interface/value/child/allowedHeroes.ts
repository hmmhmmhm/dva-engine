import { ValuePlayerType } from '../../../type'

/**
 * The array of heroes from which the specified
 * player is currently allowed to select.
 */
export interface IAllowedHeroes {
    /**
     * Player - You can specify any Player Syntax
     * to define the array.
     */
    player: ValuePlayerType
}