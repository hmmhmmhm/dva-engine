import { ValuePlayerType } from '../../../type'

/**
 * The player’s current height in meters above
 * a surface. Results in a 0 whenever the place
 * is on a surface.
 */
export interface IAltitudeOf {
    /**
     * Player - You can specify any Player Syntax
     * to define the array.
     */
    player: ValuePlayerType
}