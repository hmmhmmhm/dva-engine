import { ValuePlayerType, ValueVectorType, ValueNumberType, ValueRelativeType, ValueMotionType } from '../../../type'

/**
 * Applies an instantaneous change in velocity
 * to the movement of one or more players.
 */
export interface IApplyImpluse {
    /**
     * Player - The player or players whose velocity
     * will be changed. Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Direction - The unit direction in which
     * the impulse will be applied. This value
     * is normalized internally. Can use most Vector
     * based Value Syntax.
     */
    direction: ValueVectorType
    /**
     * Speed - The magnitude of the change to the
     * velocities of the player or players. Can
     * use most Number based Value Syntax.
     */
    speed: ValueNumberType
    /**
     * Relative - Specifies whether the direction
     * is relative to world coordinates or the
     * local coordinates of the player or players.
     */
    relative: ValueRelativeType
    /**
     * To World - Relative to the world’s coordinate system.
     */
    motion: ValueMotionType
}