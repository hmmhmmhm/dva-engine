import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the projectile speed for one or more
 * players to a percentage of regular projectile speed.
 */
export interface ISetProjectileSpeed {
    /**
     * Player - The player or players whose projectile
     * speed will be set. Can use most Player based
     * Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Projectile Speed Percent - The percentage
     * of the regular projectile speed to which
     * the player or players will set their personal
     * projectile speed. Can use most Number based
     * Value Syntax for this value.
     */
    projectileSpeedPercent: ValueNumberType
}