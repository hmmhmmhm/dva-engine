import { ValuePlayerType } from '../../../type'

/**
 * Undoes the effect of the enable death spectate
 * target hud action for one or more players.
 */
export interface IDisableDeathSpectateTargetHud {
    /**
     * Player - The player or players who will
     * revert to seeing their own HUD while death
     * spectating. Can use most Player based Value
     * Syntax for this value.
     */
    player: ValuePlayerType
}