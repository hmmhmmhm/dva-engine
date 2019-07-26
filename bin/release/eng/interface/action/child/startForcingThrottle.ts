import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Defines minimum and maximum movement input
 * values for one or more players. Possibly
 * forcing or preventing movement.
 */
export interface IStartForcingThrottle {
    /**
     * Player - The player or players whose movement
     * whill be forced or limited. Can use most
     * Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Min Forward - Sets the minimum run forward
     * amount. 0 allows the player or players to
     * stop while 1 forces full forward movement.
     * Can use most Number based Value Syntax.
     */
    minForward: ValueNumberType
    /**
     * Max Forward - Sets the maximum run forward
     * amount. 0 allows the player or players to
     * stop while 1 forces full forward movement.
     * Can use most Number based Value Syntax.
     */
    maxForward: ValueNumberType
    /**
     * Min Backward - Sets the minimum run backward
     * amount. 0 allows the player or players to
     * stop while 1 forces full forward movement.
     * Can use most Number based Value Syntax.
     */
    minBackward: ValueNumberType
    /**
     * Max Backward - Sets the maximum run backward
     * amount. 0 allows the player or players to
     * stop while 1 forces full forward movement.
     * Can use most Number based Value Syntax.
     */
    maxBackward: ValueNumberType
    /**
     * Min Sideways - Sets the minimum run sideways
     * amount. 0 allows the player or players to
     * stop while 1 forces full forward movement.
     * Can use most Number based Value Syntax.
     */
    minSideways: ValueNumberType
    /**
     * Max Forward - Sets the maximum run sideways
     * amount. 0 allows the player or players to
     * stop while 1 forces full forward movement.
     * Can use most Number based Value Syntax.
     */
    maxSideways: ValueNumberType
}