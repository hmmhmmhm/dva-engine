import { ValuePlayerType } from '../../../type'

/**
 * Instantly resurrects one or more players
 * at the location they died with no transition.
 */
export interface IResurrect {
    /**
     * Player - The player or players who will
     * be resurrected. Can use most Player based
     * Value Syntax for this value.
     */
    player: ValuePlayerType
}