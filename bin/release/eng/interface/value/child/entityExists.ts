import { ValueEntityType } from '../../../type'

/**
 * Whether the specified player, icon entity,
 * or effect entity still exists. Useful for
 * determining if a player has left the match
 * or an entity has been destroyed.
 */
export interface IEntityExists {
    /**
     * Entity - The player, icon entity, or effect
     * entity whose existance to check.
     */
    entity: ValueEntityType
}