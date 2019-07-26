import { ValueEntityType } from '../../../type'

/**
 * Destroys an effect entity that was created
 * by create effect.
 */
export interface IDestroyEffect {
    /**
     * Entity - Specifies which effect entity to
     * destroy. This entity may be the last created
     * entity or a variable into which last created
     * entity was earlier stored.
     */
    entity: ValueEntityType
}