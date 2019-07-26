import { ValuePlayerType } from '../../../type'

/**
 * Stops all forced camera positions started
 * by the start camera or one or more players.
 */
export interface IStopCamera {
    /**
     * Player - The player or players whose forced
     * camera positions will stop. Can use most
     * Player based Value Syntax.
     */
    player: ValuePlayerType
}