/**
 * Whether the specified player, icon entity,
 * or effect entity still exists. Useful for
 * determining if a player has left the match
 * or an entity has been destroyed.
 */
export const entityExists = (
	/**
	 * Entity - The player, icon entity, or effect
	 * entity whose existance to check.
	 * - `Type.Entity.`
	 */
	entity: string | number | any[]
) => {

	return `Entity Exists(${entity})`
}