import {
    ValueVectorType,
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * The surface normal at the ray cast hit position
 * (or from end pos to start pos if no hit occurs).
 */
export interface IRayCastHitNormal {
    /**
     * Start POS - The start position for the ray
     * cast. If a player is provided. A position
     * 2 meters above the player’s feet is used.
     * Can use most Vector based Value Syntax to
     * provide this value.
     */
    startPos: ValueVectorType

    /**
     * End POS - The end position for the ray cast.
     * If a player is provided. A position 2 meters
     * above the player’s feet is used. Can use
     * most Vector based Value Syntax to provide this value.
     */
    endPos: ValueVectorType

    /**
     * Players to include - Which players can be
     * hit by this ray cast. Can use most Player
     * based Value Syntax to provide this value.
     */
    playersToInclude: ValueArrayType

    /**
     * Players to exclude - Which players cannot
     * be hit by this ray cast. This list takes
     * precedence over players to include. Can
     * use most Player based Value Syntax to provide this value.
     */
    playersToExclude: ValueArrayType

    /**
     * Include player owned objects - Whether player
     * owned objects (such as barriers or turrets)
     * should be included in the ray cast. Can
     * use most Boolean based Value Syntax to provide this value.
     */
    IncludePlayerOwnedObjects: ValueBoolType
}