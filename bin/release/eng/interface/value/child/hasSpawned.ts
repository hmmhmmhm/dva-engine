import {
    ValueEntityType
} from '../../../type'

/**
 * Whether an entity has spawned in the world.
 * Results in false for players who have not
 * chosen a hero yet.
 */
export interface IHasSpawned {
    entity: ValueEntityType
}