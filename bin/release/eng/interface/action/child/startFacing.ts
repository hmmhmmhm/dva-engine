import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType,
    ValueRelativeType,
    ValueFacingReevaluationType
} from '../../../type'

/**
 * Starts turning one or more players to face
 * the specified direction.
 */
export interface IStartFacing {
    /**
     * Direction - The unit direction in which
     * the player or players will eventually face.
     * Can use most Vector based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Turn Rate - The turn rate in degrees per
     * second. Can use most Number based Value
     * Syntax to specify.
     */
    direction: ValueVectorType
    /**
     * Relative - Specifies whether direction is
     * relative to the world coordinates or the
     * local coordinates of the player or players.
     */
    turnRate: ValueNumberType
    /**
     * Reevaluation - Specifies which of this actions
     * inputs will be continously reevaluated.
     * This action will keep asking for and using
     * new values from reevaluated inputs. You
     * can choose from “Direction and Turn Rate” or “None”.
     */
    relative: ValueRelativeType
    /**
     * Player - The player or players who will
     * start turning. Can use most Player based Value Syntax.
     */
    reevaluation: ValueFacingReevaluationType
}