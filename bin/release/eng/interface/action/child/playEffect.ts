import {
    ValuePlayersParamType,
    ValuePlayEffect,
    ValueColorType,
    ValueVectorType,
    ValueNumberType,
} from '../../../type'

/**
 * Plays an effect at a position in the world.
 * The lifetime of this effect is short, so
 * it does not need to be updated or destroyed.
 */
export interface IPlayEffect {
    /**
     * Visible to - One or more players who will
     * be able to see the effect. Can use most
     * Value Syntax to select one or multiple players.
     */
    visibleTo: ValuePlayersParamType
    /**
     * Type - The type of the effect to be created.
     * (Good Explosion, Bad Explosion, Ring Explosion,
     * Good Pickup Effect, Bad Pickup Effect, Debuff
     * Impact Sound, Buff Impact Sound, Ring Explosion
     * Sound, Buff Explosion Sound, Explosion Sound)
     */
    type: ValuePlayEffect
    /**
     * Color - The color of the effect to be created.
     * IF a particular team is chosen, the effect
     * will either be red or blue, depending on
     * whether the team is hostile to the viewer.
     * (Good Explosion, Bad Explosion, Ring Explosion,
     * Good Pickup Effect, Bad Pickup Effect, Debuff
     * Impact Sound, Buff Impact Sound, Ring Explosion
     * Sound, Buff Explosion Sound, Explosion Sound)
     */
    color: ValueColorType
    /**
     * Position - The effect’s position. If this
     * value is a player, then the effect will
     * move along with the player, otherwise, the
     * value is interpreted as a position in the
     * world. Can use most Player or Vector based
     * Value Syntax. (Good Explosion, Bad Explosion,
     * Ring Explosion, Good Pickup Effect, Bad
     * Pickup Effect, Debuff Impact Sound, Buff
     * Impact Sound, Ring Explosion Sound, Buff
     * Explosion Sound, Explosion Sound)
     */
    position: ValueVectorType
    /**
     * Radius - The effect’s radius in meters.
     * Can use most Number based Value Syntax.
     */
    radius: ValueNumberType
}