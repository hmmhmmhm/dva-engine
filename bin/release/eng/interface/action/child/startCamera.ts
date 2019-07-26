import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType,
} from '../../../type'

/**
 * Places your camera at a location, facing a direction.
 */
export interface IStartCamera {
    /**
     * Player - The player executing this rule.
     * As specified by the event, may be the same
     * as the attacker or the victim. Can use most
     * Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Eye Position - The position of the camrea,
     * reevaluates continously. Can use most Vector
     * based Value Syntax to specify.
     */
    eyePosition: ValueVectorType
    /**
     * Look at position - Where the camera looks
     * at, reevaluates continously. Can use most
     * Vector based Value Syntax to specify.
     */
    lookAtPosition: ValueVectorType
    /**
     * Blend Speed - How fast to blend the camera
     * movement as positions change. 0 means do
     * not blend at all and just change positions
     * instantly. Can use most Number based Value Syntax.
     */
    blendSpeed: ValueNumberType
}