/**
 * Whether an entity has spawned in the world.
 * Results in false for players who have not
 * chosen a hero yet.
 */
export const hasSpawned = (
	/**
	 * - `Type.Entity.`
	 */
	entity: string | number | any[]
) => {

	return `Has Spawned(${entity})`
}